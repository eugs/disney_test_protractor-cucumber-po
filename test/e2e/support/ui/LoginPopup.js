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
    // return this.getBody()
    //   .then(function () {
        console.log("fill login: ", login);
        return browser.$(this.sels.LOGIN_FIELD).sendKeys(login);
    // });
  };

  this.fillPassword = function (pass) {
    // return this.getBody()
    //   .then(function () {
        console.log("fill pass: ", pass);
        return browser.$(this.sels.PASS_FIELD).sendKeys(pass);
    // });
  };

  this.signIn = function () {
    console.log("sing in");
    return browser.$(this.sels.SIGN_BTN).click();
  }

  this.getErrorMessage = function () {
    var msgElem = browser.$(this.sels.ERROR_MSG);
    return helper.waitForVisible(msgElem)
      .then(() => {
        console.log("get error");
        // return msg.getText()
        return msgElem;
          // .then(function (txt) {
          //   console.log("TEXT MESSDF: ", txt);
          // });
      });
  }
  //
  // this.getGatingMessage = function () {
  //   console.log("get gating");
  //   var msgElem = browser.$('.block.block-gating-message"]');
  //   return helper.waitForPresence(msgElem)
  //     .then(() => {
  //       // return msg.getText()
  //       return msgElem;
  //         // .then(function (txt) {
  //         //   console.log("TEXT MESSDF: ", txt);
  //         // });
  //     });
  // }





};

  module.exports = new LoginPopup();
