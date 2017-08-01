var {defineSupportCode} = require('cucumber');
var pageFactory = require('../support/pages/pageFactory.js');

defineSupportCode(function({Given, When, Then}) {

  Then(/^I should see Log In popup$/, function() {
    return pageFactory.currentPage.loginPopup.getBody()
      .then(function (frame) {
        console.log("login appeared!");
        expect(frame).to.not.be.undefined;
      });
  });

  When(/^I try to sign in with login "([^"]*)" and password "([^"]*)"$/, function(login, pass) {
    var popup = pageFactory.currentPage.loginPopup;

    popup.fillLogin(login);
    popup.fillPassword(pass);
    return popup.signIn();
  });

  Then(/^I should see popup error message contains "([^"]*)"$/, function(expMsg) {
    var popup = pageFactory.currentPage.loginPopup;
    return popup.getErrorMessage()
      .then(function (msgElem) {
        return msgElem.getText()
          .then(function (txt) {
            console.log("got text: ", "'" + txt + "'");
            return expect(txt).to.include(expMsg);
          });
      });
  });

  // Then(/^I should see the gating message "([^"]*)"$/, function(expMsg) {
  //   var popup = pageFactory.currentPage.loginPopup;
  //   return popup.getGatingMessage()
  //     .then(function (msgElem) {
  //       return msgElem.getText()
  //         .then(function (txt) {
  //           console.log("got text gating");
  //           expect(txt).to.equal(expMsg);
  //         });
  //     });
  //
  // });


});
