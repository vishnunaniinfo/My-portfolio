const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/My-portfolio' : '', 
  assetPrefix: isProd ? '/My-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};
