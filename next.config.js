/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'orbibarobotics.com',
      },
    ],
  },
};

module.exports = nextConfig;
