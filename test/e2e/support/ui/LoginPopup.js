var helper = require('../helpers/helper.js')

var LoginPopup = function() {

  this.sels = {
          BODY : 'iframe[name="disneyid-iframe"]',
          LOGIN_FIELD : 'input[type="email"]',
          PASS_FIELD : 'input[type="password"]',
          SIGN_BTN : '.btn.btn-primary.btn-submit.ng-binding',
          ERROR_MSG : 'div[ng-repeat="item in parsedItems"]'
  };


  this.getBody = function () {
    return helper.getFrame(by.css(this.sels.BODY)).then((frame) => {
      return frame;
    });
  };

  this.fillLogin = function (login) {
    return browser.$(this.sels.LOGIN_FIELD).sendKeys(login);
  };

  this.fillPassword = function (pass) {
    return browser.$(this.sels.PASS_FIELD).sendKeys(pass);
  };

  this.signIn = function () {
    return browser.$(this.sels.SIGN_BTN).click();
  }

  this.getErrorMessage = function () {
    var msgElem = browser.$(this.sels.ERROR_MSG);
    return helper.waitForVisible(msgElem).then(() => {
        return msgElem;
    });
  }

};

  module.exports = new LoginPopup();
