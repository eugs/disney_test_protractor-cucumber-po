var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var EC = protractor.ExpectedConditions;
var pageFactory = require('../support/pages/pageFactory.js');
var helper = require('../support/helpers/helper.js');

defineSupportCode(function({Given, When, Then}) {

  When(/^I add movie to favorites$/, function() {
    return pageFactory.currentPage.addToFavorites();
  });

  When(/^I click the preview button$/, function() {
    pageFactory.getPage('movie');
    return pageFactory.currentPage.clickPreview();
  });

  Then(/^I should see the video$/, function() {
      var player = pageFactory.currentPage.videoPlayer.getBody();
      // return browser.wait(EC.presenceOf(player), 5000);
      return helper.waitForPresence(player);
  });

  When(/^I close the video$/, function() {
    var player = pageFactory.currentPage.videoPlayer;
    return player.close().then (() => {
      return player.getBody().isPresent().then((present) => {
          expect(present).to.be.false;
        })
      })
  });

  Then(/^I should see the page of the movie "([^"]*)"$/, function(expectedTitle) {
    var current = pageFactory.currentPage;
    // var current = pageFactory.getPage('movie');
    return current.getMovieTitle().then((title)=> {
      expect(title).to.equal(expectedTitle);
    });
  });

  //TODO remove sleep or not?
  When(/^I watch the video for "([^"]*)" secs$/, function(secs) {
    // pageFactory.currentPage.sayHello();
    // return browser.sleep(secs * 1000);
    return helper.pauseFor(secs * 1000);
  });

  When(/^I click Buy via "([^"]*)"$/, function(provider) {
    return pageFactory.currentPage.buyVia(provider);
  });


});
