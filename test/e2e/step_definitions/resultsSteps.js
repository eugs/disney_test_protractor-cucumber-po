var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var EC = protractor.ExpectedConditions;

var pageFactory = require('../support/pages/pageFactory.js');

defineSupportCode(function({Given, When, Then}) {

  Then(/^I should see movies page with header text "([^"]*)"$/, function(expTitle) {
    // var current = pageFactory.getPage('results');
    // return current.getCategoryTitle().getText()
    return pageFactory.currentPage.getCategoryTitle().getText()
      .then((title) => {
        expect(title).to.be.equal(expTitle)
      })
  });

  When(/^I find the movie "([^"]*)"$/, function(title) {
    // pageFactory.getPage('results');
    return pageFactory.currentPage.findMovieInList(title);
  });

});
