var revojs = require('bitcoinjs-lib')

Object.assign(revojs.networks, require('./networks'))

revojs.utils = require('./utils')

module.exports = revojs