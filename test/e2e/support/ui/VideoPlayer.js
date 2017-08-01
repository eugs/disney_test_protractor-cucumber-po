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
    var back_button = browser.$(this.sels.BACK_BTN);
    return helper.JS_click(back_button).then(() => {
      return helper.waitForStale(this.getBody());
    })
  }

  this.isOpened = function () {
    return this.getBody().isDisplayed().then((res) => {
      return res;
    })
  }

};

module.exports = new VideoPlayer();
