// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    turbo: {
      enabled: true, // Set turbo to true within an object
    },
  },

  images: {
    domains: ["randomuser.me"],
  },
};

// export default nextConfig;

// /** @type {import('next').NextConfig} */

// const nextConfig = {};

// module.exports = nextConfig;
