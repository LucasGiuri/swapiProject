const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules = config.module.rules.filter(rule => !rule.test.test('.svg'));

  config.module.rules.push({
    test: /\.svg$/,
    oneOf: [
      {
        resourceQuery: /image/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
      {
        resourceQuery: /react/,
        use: {
          loader: '@svgr/webpack',
          options: {
            svgo: false
          }
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  });

  config.resolve.alias['#'] = path.join(__dirname, '../');
  config.resolve.alias['@'] = path.join(__dirname, '../Legacy/src');

  return config;
};
