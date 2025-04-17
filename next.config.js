/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/singh.co',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
