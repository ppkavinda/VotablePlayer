'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  YOUTUBE_API_KEY :'"AIzaSyB3rCpN08ZRMfnjExT6_FJ45bqauDEhbsA"'
})
