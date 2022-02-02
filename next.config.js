const withImages = require('next-images')

// para utilizar a estrutura -> import img from '...assets/...'
module.exports = withImages({

    images: {
      disableStaticImages: true
    },

    webpack(config, options) {
      return config
    }
  })