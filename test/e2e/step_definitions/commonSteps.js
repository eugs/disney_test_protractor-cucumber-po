var {defineSupportCode} = require('cucumber');
var pageFactory = require('../support/pages/pageFactory.js')
var EC = protractor.ExpectedConditions;

defineSupportCode(function({Given, When, Then}) {

  Given(/^I'm on the "([^"]*)" page$/, function (pageName) {
    return pageFactory.getPage(pageName).visit();
  });

  Then(/^I should see the title "([^"]*)"$/, function(title) {
    return browser.getTitle().then(function (txt) {
        console.log("TITLE: ", txt);
      });
  });

  When(/^I hover on header option "([^"]*)" and choose "([^"]*)"$/, function(menuOption, subOption) {
    return pageFactory.currentPage.header.hoverAndChoose(menuOption, subOption)
     .then(function () {
       return browser.navigate().refresh();
    })
  });



  //TODO refactor
  Then(/^I should see Log In popup$/, function() {
    // var login = browser.$('div .content.ng-scope');
    var login = browser.$('.btn.btn-primary.btn-submit.ng-binding');
    console.log("WAIT?");
    return browser.wait(EC.presenceOf(login, 5000)).then(() => {
      console.log("got!");
      return login.click();
    })
    // return browser.wait(EC.presenceOf(login, 5000)).then(() => {
    //   console.log("PRESERNT");
    //     // login.isPresent().then((present) => {
    //     // expect(present).to.be.true;
    //     // })
    //   });

    // return browser.wait(EC.presenceOf(login, 5000))
    //   .then(() => {
    //     login.isPresent()
    //     .then((present) => {
    //       expect(present).to.be.true;
    //     })
    //   })
  });

});
