const path = require('path');

module.exports = {
  webpack: (config) => {
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Other configurations...
};
