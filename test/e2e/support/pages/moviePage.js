var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');
var helper = require('../helpers/helper.js')

var MoviePage = function (){

  this.sels = {
          PREVIEW_BTN : 'a[href="#preview"]',
          TITLE_HEADER : '#title-container h1',
          FAV_BTN : '.glyphicon.favorite-no',
          BUY_BNT : '#buy_button',
          PROVIDER_OPT : '.choose-provider'
  };

  this.clickPreview = function () {
    return browser.$(this.sels.PREVIEW_BTN).click();
  };

  this.getMovieTitle = function () {
    var title = browser.$(this.sels.TITLE_HEADER);
    return helper.waitForPresence(title).then(() => {
        return title.getText();
      })
  };

  this.addToFavorites = function () {
    return browser.$(this.sels.FAV_BTN).click();
  };

  this.clickBuyBtn = function () {
    return browser.$(this.sels.BUY_BNT).click();
  }

  this.buyVia = function (providerName) {
    this.clickBuyBtn();
    return browser.element(by.cssContainingText(this.sels.PROVIDER_OPT, providerName)).click();
  }

};

inheritator.inherit(BasePage, MoviePage);

module.exports = MoviePage;
