var {defineSupportCode} = require('cucumber');
var pageFactory = require('../support/pages/pageFactory.js');

defineSupportCode(function({Given, When, Then}) {

  When(/^I search "([^"]*)"$/, function(query) {
    pageFactory.getPage('movie');
    return pageFactory.currentPage.header.search(query)
  });

  Then(/^I should see search results$/, function() {
    var popup = pageFactory.currentPage.header.getSearchPopup();
    return expect(popup).to.not.be.undefined;
  });

  When(/^I choose search result number "([^"]*)"$/, function (number) {
    return pageFactory.currentPage.header.getSearchResults()
      .then((res)=> {
          pageFactory.getPage('movie');
          return res[number - 1].click();
      })
  });

  When(/^I click "See All Results" button$/, function () {
    pageFactory.getPage('search');
    return pageFactory.currentPage.header.clickAllResultsButton();
  });

  Then(/^I should see search page$/, function() {

  });

});
