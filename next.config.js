/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'singh.co';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: isProduction ? `/${repoName}` : '',
  basePath: isProduction ? `/${repoName}` : '',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/fonts/',
          publicPath: '/singh.co/static/fonts/',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
