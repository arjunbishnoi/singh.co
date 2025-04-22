/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/mansisingh.co' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mansisingh.co/' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['css-loader', 'postcss-loader']
    });
    return config;
  }
};

module.exports = nextConfig;
