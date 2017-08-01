var EC = protractor.ExpectedConditions;
var helper = require('../helpers/helper.js')

var VideoPlayer = function () {

  this.sels = {
          BODY : '#player_html5_api',
          BACK_BTN : '.dmaHtml5PlayerBackButton'
  };

  this.getBody = function () {
    return browser.$(this.sels.BODY);
  }

  this.close = function () {
    console.log("close video");
    var back_button = browser.$(this.sels.BACK_BTN);
    //  return browser.executeScript("arguments[0].click();", back_button.getWebElement())
    return helper.JS_click(back_button)
    .then(() => {
      console.log("staled!");
      // return browser.wait(EC.stalenessOf(this.getBody()), 5000);
      return helper.waitForStale(this.getBody());
    })
  }

  this.isOpened = function () {
    return this.getBody().isDisplayed()
    .then((res) => {
      console.log("displayed?? ", res);
      return res;
    })
  }

};

module.exports = new VideoPlayer();
