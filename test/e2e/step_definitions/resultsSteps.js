var {defineSupportCode} = require('cucumber');
var pageFactory = require('../support/pages/pageFactory.js');

defineSupportCode(function({Given, When, Then}) {

  Then(/^I should see movies page with header text "([^"]*)"$/, function(expTitle) {
    var current = pageFactory.getPage('results');
    var category = current.getCategoryTitle().then((title) => {
        expect(title).to.be.equal(expTitle)
      });
  });

  When(/^I find the movie "([^"]*)"$/, function(title) {
    return pageFactory.currentPage.findMovieInList(title).then(function () {
      return pageFactory.getPage('movie');
    })
  });

  When(/^I sort results by "([^"]*)"$/, function(tag) {
    return pageFactory.currentPage.sortBy(tag);
  });

});
