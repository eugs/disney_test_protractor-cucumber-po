var {defineSupportCode} = require('cucumber');
var world = require('./world.js');

defineSupportCode(function({After}) {

  After(function() {
    console.log("After");
    return browser.driver.quit();
  });

});
