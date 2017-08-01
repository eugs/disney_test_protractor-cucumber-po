var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');
var helper = require('../helpers/helper.js')

var ResultsPage = function () {

  this.sels = {
          SORT_DROPDOWN: '.dropdown.dma-dropdown.pull-right',
          CATEGORY_TITLE : '.hero-title.text-white.ng-binding',
          MOVIES_ELEMENTS : '.padded-container.container.movielist li',
          MOVIES_LINKS : '.padded-container.container.movielist li a',
          SORT_TAGS : '.dropdown-menu ul li a'
  };

  this.getSortDropdown = function () {
    return browser.$(this.sels.SORT_DROPDOWN);
  };

  this.sortBy = function (optionText) {
    var menu = this.getSortDropdown().click();
    return browser.element(by.cssContainingText(this.sels.SORT_TAGS, optionText)).click();
  }

  this.getMoviesElements = function () {
    return browser.$$(this.sels.MOVIES_ELEMENTS);
  };

  this.getCategoryTitle = function () {
    var category = browser.$(this.sels.CATEGORY_TITLE);
    return helper.waitForPresence(category).then(()=> {
      return category.getText();
    });
  };

  this.findMovieInList = function (title) {
    var selector = browser.element.all(by.cssContainingText(this.sels.MOVIES_LINKS, title)).first();
    return helper.waitForPresence(selector).then(()=> {
        helper.JS_scroll(selector).then(()=> {
          return selector.click();
        })
      })
  };

};

inheritator.inherit(BasePage, ResultsPage);

module.exports = ResultsPage;
