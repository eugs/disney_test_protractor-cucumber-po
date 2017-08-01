var {defineSupportCode} = require('cucumber');
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
    return current.getMovieTitle().then((title)=> {
      expect(title).to.equal(expectedTitle);
    });
  });

  When(/^I watch the video for "([^"]*)" secs$/, function(secs) {
    return helper.pauseFor(secs * 1000);
  });

  When(/^I click Buy via "([^"]*)"$/, function(provider) {
    return pageFactory.currentPage.buyVia(provider);
  });

});
