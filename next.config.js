/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.lorem.space", "cdn.shopify.com"],
  },
};

module.exports = nextConfig;
