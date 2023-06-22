const { defineConfig } = require('cypress')
const os = require('os');
module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: false,
  record: false,
  projectId: 'c9gjbc',
  env: {
    api_url: 'http://silims2.sitrovainnovation.com/client/#/login',
    client_url: 'http://silims2.sitrovainnovation.com',
  },
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl:'http://silims.sitrovainnovation.com',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/login-user.spec.js',
    testIsolation: false
  }
})
