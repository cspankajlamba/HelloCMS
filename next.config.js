const path = require('path');

module.exports = {
 webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  // Other configurations...
};
