var {defineSupportCode} = require('cucumber');
var pageFactory = require('../support/pages/pageFactory.js')
var helper = require('../support/helpers/helper.js')
var EC = protractor.ExpectedConditions;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

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



//   //TODO refactor
//   Then(/^I should see Log In popup$/, function() {
//
//     // var login = browser.driver.findElement(by.css('div .content.ng-scope'));
//
//         // var driver = browser.driver;
//         // var loc = by.css('iframe[name="disneyid-iframe"]');
//         //
//         // var el = driver.findElement(loc);
//         //
//         // browser.switchTo().frame(el)
//         //   .then(function () {
//         //     console.log("SWITCHED!");
//         //     var login = browser.driver.findElement(by.css('.btn.btn-primary.btn-submit.ng-binding'))
//         //     login.click();
//         //   })
//
//
//         pageFactory.currentPage.loginPopup.getBody()
//           .then(function (frame) {
//             console.log("login appeard");
//             expect(frame).to.not.be.undefined;
//           });
//
// //WORKING
//         // helper.getFrame(by.css('iframe[name="disneyid-iframe"]'))
//         //   .then(function (frame) {
//         //     // console.log("Log In appeared", frame);
//         //     expect(frame).to.not.be.undefined;
//         //     // browser.driver.findElement(by.css('.btn.btn-primary.btn-submit.ng-binding')).click()
//         //     // browser.$('.btn.btn-primary.btn-submit.ng-binding').click();
//         //   });
//
//       // var login = browser.driver.findElement(by.css());
//
//     //   console.log("WAIT?");
//     // return browser.wait(EC.presenceOf(el, 5000))
//     //   .then(() => {
//     //     console.log("got!");
//     //       return login.click();
//     //     })
//   });




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
