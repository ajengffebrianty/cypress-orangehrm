const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    'baseUrl': 'https://opensource-demo.orangehrmlive.com/',
    'watchForFileChanges': false,
    'screenshotsFolder': "cypress/results/mochawesome-report/assets",
    'reporter': "mochawesome",
    'reporterOptions':{
      "charts": true,
      "overwrite": false,
      "html": false, //want to create json report,
      "json": true,
      "reportDir":"cypress/results/"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
