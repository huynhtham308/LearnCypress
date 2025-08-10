const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: "23foni",
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
     allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
});


