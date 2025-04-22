/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  webpack: (config) => {
    return config;
  }
};

module.exports = nextConfig;
