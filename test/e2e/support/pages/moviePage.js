
var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');

var MoviePage = function (){


  this.clickPreview = function () {
    return browser.$('a[href="#preview"]').click();
  };

  this.getMovieTitle = function () {
    return browser.$('#title-container h1').getText();
  };

  this.addToFavorites = function () {
    return browser.$('.glyphicon.favorite-no').click();
  };

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
