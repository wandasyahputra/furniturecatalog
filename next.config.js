require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')
const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withFonts(withImages(
  {
    devIndicators: {
      buildActivity: false,
      autoPrerender: false
    },
    webpack: config => {
      config.plugins = config.plugins || []
      config.resolve.alias['@'] = path.resolve(__dirname)
      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      ]

      return config
    }
  }
))
