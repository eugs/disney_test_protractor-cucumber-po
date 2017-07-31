var EC = protractor.ExpectedConditions;
var helper = require('../helpers/helper.js')

var VideoPlayer = function () {};

VideoPlayer.prototype.getBody = function () {
  return browser.$('#player_html5_api');
}

VideoPlayer.prototype.close = function () {
  console.log("close video");
  var back_button = browser.$('.dmaHtml5PlayerBackButton');
  //  return browser.executeScript("arguments[0].click();", back_button.getWebElement())
   return helper.JS_click(back_button)
    .then(() => {
      console.log("staled!");
      // return browser.wait(EC.stalenessOf(this.getBody()), 5000);
      return helper.waitForStale(this.getBody());
    })
}

VideoPlayer.prototype.isOpened = function () {
  return this.getBody().isDisplayed()
    .then((res) => {
      console.log("displayed?? ", res);
      return res;
  })
}

module.exports = new VideoPlayer();
