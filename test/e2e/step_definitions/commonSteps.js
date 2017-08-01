var {defineSupportCode} = require('cucumber');
var pageFactory = require('../support/pages/pageFactory.js')

defineSupportCode(function({Given, When, Then}) {

  Given(/^I'm on the "([^"]*)" page$/, function (pageName) {
    return pageFactory.getPage(pageName).visit();
  });

  Then(/^I should see the title "([^"]*)"$/, function(title) {
    return browser.getTitle().then(function (txt) {
        console.log("page title: ", txt);
        expect(txt).to.equal(title);
      });
  });

  When(/^I hover on header option "([^"]*)" and choose "([^"]*)"$/, function(menuOption, subOption) {
    return pageFactory.currentPage.header.hoverAndChoose(menuOption, subOption)
     .then(() => {
       // it just works
       return browser.sleep(1000)
        .then(() => {
          return browser.navigate().refresh();
        })
      })
  });

});
