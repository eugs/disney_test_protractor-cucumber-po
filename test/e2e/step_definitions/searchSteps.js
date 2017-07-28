var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var EC = protractor.ExpectedConditions;

var pageFactory = require('../support/pages/pageFactory.js');

defineSupportCode(function({Given, When, Then}) {

  When(/^I search "([^"]*)"$/, function(query) {
    pageFactory.getPage('movie');
    pageFactory.currentPage.header.search(query)
  });

  Then(/^I should see search results$/, function() {
    var popup = pageFactory.currentPage.header.getSearchPopup();
    expect(popup).to.not.be.undefined;
  });

  When(/^I choose search result number "([^"]*)"$/, function (number) {
    return pageFactory.currentPage.header.getSearchResults()
      .then((res)=> {
          pageFactory.getPage('movie');
          res[number - 1].click();
      })
  })

  When(/^I click "See All Results" button$/, function (number) {
    return pageFactory.currentPage.header.clickAllResultsButton();
  });

});
