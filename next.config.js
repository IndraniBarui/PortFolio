/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

module.exports = nextConfig;
