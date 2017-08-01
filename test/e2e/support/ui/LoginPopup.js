var helper = require('../helpers/helper.js')

var LoginPopup = function(){

  this.getBody = function () {
    return helper.getFrame(by.css('iframe[name="disneyid-iframe"]'))
      .then((frame) => {
        return frame;
      });
  };

  this.fillLogin = function (login) {
    // return this.getBody()
    //   .then(function () {
        console.log("fill login: ", login);
        return browser.$('input[type="email"]').sendKeys(login);
    // });
  };

  this.fillPassword = function (pass) {
    // return this.getBody()
    //   .then(function () {
        console.log("fill pass: ", pass);
        return browser.$('input[type="password"]').sendKeys(pass);
    // });
  };

  this.signIn = function () {
    console.log("sing in");
    return browser.$('.btn.btn-primary.btn-submit.ng-binding').click();
  }

  this.getErrorMessage = function () {
    console.log("get error");
    var msgElem = browser.$('div[ng-repeat="item in parsedItems"]');
    return helper.waitForPresence(msgElem)
      .then(() => {
        // return msg.getText()
        return msgElem;
          // .then(function (txt) {
          //   console.log("TEXT MESSDF: ", txt);
          // });
      });
  }

  this.getGatingMessage = function () {
    console.log("get gating");
    var msgElem = browser.$('.block.block-gating-message"]');
    return helper.waitForPresence(msgElem)
      .then(() => {
        // return msg.getText()
        return msgElem;
          // .then(function (txt) {
          //   console.log("TEXT MESSDF: ", txt);
          // });
      });
  }





};

  module.exports = new LoginPopup();
