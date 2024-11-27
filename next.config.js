/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '**', // This allows any path under pbs.twimg.com
      },
    ],
  },
};

module.exports = nextConfig;
