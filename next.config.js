// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      enabled: true, // Set turbo to true within an object
    },
  },
};

export default nextConfig;