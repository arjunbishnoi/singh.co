/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '/mansisingh.co',
  assetPrefix: '/mansisingh.co/'
};

module.exports = nextConfig;
