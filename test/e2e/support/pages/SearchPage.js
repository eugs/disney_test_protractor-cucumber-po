var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');
var EC = protractor.ExpectedConditions;
var helper = require('../helpers/helper.js')

var SearchPage = function () {

  this.data = {
          MOVIE_ELEMENT: '.row.padded-container.movielist div a',
  };

  this.findMovieInList = function (title) {
    var selector = browser.element.all(by.cssContainingText(this.data.MOVIE_ELEMENT, title)).first();
    return helper.waitForPresence(selector).then(()=> {
        helper.JS_scroll(selector).then(()=> {
           return selector.click();
        })
      })
  };

}

inheritator.inherit(BasePage, SearchPage);


module.exports = SearchPage;
