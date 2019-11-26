const withImages = require('next-images')

module.exports = withImages({
  webpack (config) {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|ico|webp)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            name: '[name]-[hash].[ext]'
          }
        }
      ]
    })

    config.module.rules.push({
      test: /\.(otf)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

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
      ]
    })

    return config
  }
})
