/** @type {import('next').NextConfig} */
const million = require("million/compiler");
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

module.exports = million.next(nextConfig);
