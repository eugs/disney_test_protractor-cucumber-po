var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var EC = protractor.ExpectedConditions;

var pageFactory = require('../support/pages/pageFactory.js');

defineSupportCode(function({Given, When, Then}) {

  When(/^I add movie to favorites$/, function() {
    return pageFactory.currentPage.addToFavorites();
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
      player.getBody().isPresent().then((present) => {
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
