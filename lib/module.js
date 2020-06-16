const path = require('path')

module.exports = function (moduleOptions) {
  const _default = {}

  const _options = Object.assign(_default, this.options.dates, moduleOptions)

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: true,
    options: _options
  })
}

module.exports.meta = require('../package.json')
