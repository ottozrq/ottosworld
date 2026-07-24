/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/site-assets",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
