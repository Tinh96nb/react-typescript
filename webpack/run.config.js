const getConfig = require('./main.config.js')
const dev = require('./dev/config.js')
const test = require('./test/config.js')
const prod = require('./prod/config.js')

const configs = {
  dev,
  test,
  prod
}

// eslint-disable-next-line func-names
module.exports = function (env) {
  return getConfig(configs[env].config)
}
