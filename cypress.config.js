const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    'baseUrl': 'https://opensource-demo.orangehrmlive.com/',
    'watchForFileChanges': false,
    'screenshotsFolder': "cypress/results/assets",
    'reporter': "mochawesome",
    'reporterOptions': {
      "overwrite": true,
      // "html": true,
    "html": false, // use this configuration for html if want to use merge json then run the scripts from package json
      "json": true, //want to create json report,
      "reportDir": "cypress/results",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
//  ---- reporter using cypress mochawesome reporter with video captured available ---  
    /* 'reporter': "cypress-mochawesome-reporter",
     'video': true,
     setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
     }, */
  },
});
