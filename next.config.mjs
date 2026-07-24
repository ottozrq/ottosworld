/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/visuals",
        destination: "/work",
        permanent: true
      },
      {
        source: "/video",
        destination: "/work",
        permanent: true
      },
      {
        source: "/photo",
        destination: "/work#photography",
        permanent: true
      },
      {
        source: "/fashion",
        destination: "/work#fashion",
        permanent: true
      },
      {
        source: "/wedding",
        destination: "/weddings",
        permanent: true
      },
      {
        source: "/dev",
        destination: "/it",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
