
var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');
var helper = require('../helpers/helper.js')

var MoviePage = function (){


  this.clickPreview = function () {
    return browser.$('a[href="#preview"]').click();
  };

  this.getMovieTitle = function () {
    var title = browser.$('#title-container h1');
    return helper.waitForPresence(title).then(() => {
        return title.getText();
      })
  };

  this.addToFavorites = function () {
    return browser.$('.glyphicon.favorite-no').click();
  };

  this.clickBuyBtn = function () {
    return browser.$('#buy_button').click();
  }

  this.buyVia = function (providerName) {
    this.clickBuyBtn();
    return browser.element(by.cssContainingText('.choose-provider', providerName)).click();
  }

};

inheritator.inherit(BasePage, MoviePage);

// MoviePage.prototype.clickPreview = function () {
//   return browser.$('a[href="#preview"]').click();
// };
//
// MoviePage.prototype.getMovieTitle = function () {
//   return browser.$('#title-container h1').getText();
// };
//
// MoviePage.prototype.addToFavorites = function () {
//   return browser.$('.glyphicon.favorite-no').click();
// };

module.exports = MoviePage;
