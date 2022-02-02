import React from 'react';

const withImages = require('next-images')

// para utilizar a estrutura -> import img from '...assets/...'
module.exports = withImages({
    webpack(config, options) {
      return config
    }
  })