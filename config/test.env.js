'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  YOUTUBE_API_KEY :'"AIzaSyB3rCpN08ZRMfnjExT6_FJ45bqauDEhbsA"'
})
