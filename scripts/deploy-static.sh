#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Refusing to deploy a dirty worktree." >&2
  exit 1
fi

commit="$(git rev-parse --short=12 HEAD)"
release="$(date -u +%Y%m%dT%H%M%SZ)-${commit}"
archive="/tmp/ottosworld-${release}.tgz"
checksum="${archive}.sha256"
basename="$(basename "$archive")"

npm ci
npm audit --omit=dev
npm run build

tar -C out -czf "$archive" .
(
  cd /tmp
  shasum -a 256 "$basename" > "$(basename "$checksum")"
)

scp "$archive" "$checksum" gagaou-server:/tmp/
ssh gagaou-server "scp '/tmp/${basename}' '/tmp/${basename}.sha256' otto@ottozhang.com:/tmp/ && rm -f '/tmp/${basename}' '/tmp/${basename}.sha256'"

ssh gagaou-server "ssh otto@ottozhang.com 'set -eu
  cd /tmp
  sha256sum -c \"${basename}.sha256\"
  test ! -e \"/var/www/ottosworld/releases/${release}\"
  sudo -n mkdir -p /var/www/ottosworld/releases
  sudo -n mkdir \"/var/www/ottosworld/releases/${release}.tmp\"
  sudo -n tar -xzf \"/tmp/${basename}\" -C \"/var/www/ottosworld/releases/${release}.tmp\"
  sudo -n test -f \"/var/www/ottosworld/releases/${release}.tmp/index.html\"
  sudo -n test -f \"/var/www/ottosworld/releases/${release}.tmp/sitemap.xml\"
  sudo -n grep -q \"e3b15a66-b5a7-4fc0-bde0-a2b2064cce45\" \"/var/www/ottosworld/releases/${release}.tmp/index.html\"
  sudo -n mv \"/var/www/ottosworld/releases/${release}.tmp\" \"/var/www/ottosworld/releases/${release}\"
  cd /var/www/ottosworld
  sudo -n rm -f current.new
  sudo -n ln -s \"releases/${release}\" current.new
  sudo -n mv -Tf current.new current
  rm -f \"/tmp/${basename}\" \"/tmp/${basename}.sha256\"
'"

rm -f "$archive" "$checksum"
printf 'Deployed release %s\n' "$release"
