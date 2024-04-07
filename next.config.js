/** @type {import('next').NextConfig} */
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["thumbnail.image.rakuten.co.jp", "lh3.googleusercontent.com"],
  },
};
