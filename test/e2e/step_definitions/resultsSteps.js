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
    var current = pageFactory.getPage('results');
    return current.getCategoryTitle().getText()
    // pageFactory.currentPage.getCategoryTitle().getText()
      .then((title) => {
        // console.log("TITLE: ", title);
        expect(title).to.be.equal(expTitle)
      })
  });

  When(/^I find the movie "([^"]*)"$/, function(title) {
    pageFactory.getPage('results');
    // var movie = pageFactory.currentPage.findMovieInList(title);
    // browser.sleep(2000);
    // return movie.click();

    return pageFactory.currentPage.findMovieInList(title);
  });

});
