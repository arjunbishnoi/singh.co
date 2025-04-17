/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined
};

module.exports = nextConfig;
