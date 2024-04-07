//const dns = require("dns");
//dns.setDefaultResultOrder("ipv4first");
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = { experimental: { serverActions: true } };

module.exports = {
  images: {
    domains: ["thumbnail.image.rakuten.co.jp", "lh3.googleusercontent.com"],
  },
};
