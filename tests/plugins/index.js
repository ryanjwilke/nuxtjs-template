const { startDevServer } = require('@cypress/webpack-dev-server')
const { getWebpackConfig } = require('nuxt')

module.exports = (on, config) => {
  if (config.testingType === 'component') {
    on('dev-server:start', (options) => {
      return startDevServer({
        options,
        webpackConfig: getWebpackConfig(),
      })
    })
  }

  return config
}
