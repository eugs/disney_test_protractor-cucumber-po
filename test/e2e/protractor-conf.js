var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: process.env.BROWSER
  },

  specs: [
    'features/*.feature'
  ],

  onPrepare: function () {
      browser.manage().window().maximize();
      global.expect = chai.expect;
  },

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: ['step_definitions/*.js', 'support/*.js'],
    // tags: ['@vid', '@fav', '@all'],
    tags: process.env.TAGS,
    format: 'pretty',
    profile: false,
    'no-source': true
  }

};
