
var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');
var EC = protractor.ExpectedConditions;

var ResultsPage = function () {


  this.data = {
          SORT_DROPDOWN: '.dropdown.dma-dropdown.pull-right',
          CATEGORY_TITLE : '.hero-title.text-white.ng-binding',
          MOVIES_ELEMENTS : '.padded-container.container.movielist li',
          MOVIES_LINKS : '.padded-container.container.movielist li a'
  };

};

inheritator.inherit(BasePage, ResultsPage);

  //TODO add option
  ResultsPage.prototype.getSortDropdown = function () {
    return browser.$(SORT_DROPDOWN).click();
  };

  ResultsPage.prototype.getMoviesElements = function () {
    return browser.$$(MOVIES_ELEMENTS);
  };

  ResultsPage.prototype.getCategoryTitle = function () {
    return browser.$(this.data.CATEGORY_TITLE);
  };

  ResultsPage.prototype.findMovieInList = function (title) {
    var selector = browser.element.all(by.cssContainingText(this.data.MOVIES_LINKS, title)).first();

    browser.wait(EC.presenceOf(selector), 5000)
      .then(()=> {
        browser.driver.executeScript("arguments[0].scrollIntoView();", selector.getWebElement())
        return selector.click();
      })
  };

module.exports = ResultsPage;
