const { defineConfig } = require('cypress')
const os = require('os');
module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: false,
  record: false,
  projectId: 'c9gjbc',
  
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl:'http://silims2.sitrovainnovation.com',
    specPattern: 'cypress/e2e/login-user.spec.js',
    testIsolation: false
  }
})
