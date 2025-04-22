/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '/singh.co',
  assetPrefix: '/singh.co/',
};

module.exports = nextConfig;
