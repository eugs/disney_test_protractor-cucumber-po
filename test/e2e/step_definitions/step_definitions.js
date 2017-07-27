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

  When(/^I search "([^"]*)"$/, function(query) {
    pageFactory.getPage('movie');
    pageFactory.currentPage.header.search(query)
  });

  Then(/^I should see the results$/, function() {
    var popup = pageFactory.currentPage.header.getSearchPopup();
    expect(popup).to.not.be.undefined;
  });

  When(/^I choose search result number "([^"]*)"$/, function (number) {
    pageFactory.currentPage.header.getSearchResults()
      .then((res)=> {
          res[number - 1].click();
      })
  })

  When(/^I click "See All Results" button$/, function (number) {
    pageFactory.currentPage.header.clickAllResultsButton();
  });

  Then(/^I should see the page of the movie "([^"]*)"$/, function(expectedTitle) {
    pageFactory.getPage('movie');

    pageFactory.currentPage.getMovieTitle().then((title)=> {
      expect(title).to.equal(expectedTitle);
    });

  });

  When(/^I click the preview button$/, function() {
    pageFactory.getPage('movie');
    pageFactory.currentPage.clickPreview();
  });

  Then(/^I should see the video$/, function() {
      var player = pageFactory.currentPage.videoPlayer.getBody();
      return browser.wait(EC.presenceOf(player), 5000);
  });

  When(/^I close the video$/, function() {
    var player = pageFactory.currentPage.videoPlayer;
    player.close().then (() => {
      player.getBody().isPresent()
        .then((present) => {
          expect(present).to.be.false;
        })
      })
  });

  //TODO remove sleep or not?
  When(/^I watch the video for "([^"]*)" secs$/, function(secs) {
    // pageFactory.currentPage.sayHello();
    return browser.sleep(secs * 1000);
  });

});
