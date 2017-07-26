//features/step_definitions/my_step_definitions.js
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var EC = protractor.ExpectedConditions;

var currentPage;
var pageFactory = require('../support/pages/pageFactory.js');
var movie_page = pageFactory.getPage('movie');


defineSupportCode(function({Given, When, Then}) {

  Given(/^I'm on the main page$/, function() {
    return browser.get('https://www.disneymoviesanywhere.com/');
  });

  Then(/^I should see the title "([^"]*)"$/, function(title) {
    return browser.getTitle().then(function (txt) {
        console.log("TITLE: ", txt);
      });
  });

  // When(/^I click "([^"]*)"$/, function(buttonName) {
  //   // var button = this.browser.element(by.cssContainingText('.menu-link.menu-uppercase', buttonName))
  //   // console.log("CLICK");
  //   // var button = browser.$('#search');
  //   // browser.wait(EC.elementToBeClickable(button), 5000).then(()=> {
  //   //   return button.click();
  //   // });
  // });

  When(/^I search "([^"]*)"$/, function(query) {
    pageFactory.getPage('movie');
    pageFactory.currentPage.header.search(query)

    // console.log("searc");
    //
    // var button = browser.$('#search');
    // browser.wait(EC.elementToBeClickable(button), 5000)
    //   .then(()=> {
    //   button.click();
    //   })
    //   .then(()=> {
    //     var field = browser.$('#q');
    //     browser.wait(EC.visibilityOf(field), 5000).then(()=> {
    //       return field.sendKeys(query);
    //     });
    //   })
  });

  Then(/^I should see the results$/, function() {
    currentPage = movie_page;
    return browser.$('.row.padded-container.movielist a').click();
  });

  Then(/^I should see the page of the movie "([^"]*)"$/, function(expectedTitle) {
      // return browser.$('#title-container h1').getText()
      //   .then(function (text) {
      //     expect(text).to.equal(title);
      //   });

    pageFactory.getPage('movie');

    pageFactory.currentPage.getMovieTitle().then((title)=> {
      console.log("get title: ", title);
      expect(title).to.equal(expectedTitle);
    });
  });

  When(/^I click the preview button$/, function() {
    console.log("preview ");
    // currentPage = movie_page;
    pageFactory.getPage('movie');
    pageFactory.currentPage.clickPreview();
    // return browser.$('a[href="#preview"]').click();
  });

  Then(/^I should see the video$/, function() {
      var player = browser.$('#player_html5_api');
      return browser.wait(EC.presenceOf(player), 5000);
  });

  When(/^I close the video$/, function() {
    console.log("close video");
    var back_button = browser.$('.dmaHtml5PlayerBackButton');
    // return browser.wait(EC.presenceOf(back_button), 5000)
    //   .then (()=> {
    //     back_button.click();
    //   });

    browser.actions().mouseMove(back_button).mouseDown().mouseUp().perform();
  });

  When(/^I watch the video for "([^"]*)" secs$/, function(secs) {
    currentPage.sayHello();
    return browser.sleep(secs * 1000);
  });

});
