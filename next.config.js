/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/singh.co' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/singh.co/' : '',
};

module.exports = nextConfig;
