// next.config.js

const path = require('path');

module.exports = {
  basePath: '/HelloCMS', // Change 'your-repo-name' to your actual repository name
  assetPrefix: '/HelloCMS/', // Change 'your-repo-name' to your actual repository name
  target: 'experimental-serverless-trace',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
