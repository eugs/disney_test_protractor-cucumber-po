var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');

var MainPage = function (){
  this.url = 'https://www.disneymoviesanywhere.com/';
};

inheritator.inherit(BasePage, MainPage);


MainPage.prototype.clickPreview = function () {
  return browser.$('a[href="#preview"]').click();
};

MainPage.prototype.getMovieTitle = function () {
  return browser.$('#title-container h1').getText();
};

MainPage.prototype.addToFavorites = function () {
  return browser.$('.glyphicon.favorite-no').click();
};

module.exports = MainPage;
