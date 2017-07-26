
var movie_page = function () {

  this.clickPreview = function () {
    return browser.$('a[href="#preview"]').click();
  };

  this.clickContinue = function () {
    element(by.buttonText('CONTINUE')).click();
    return require('./confirm_page.js');
  };

};

module.exports = new movie_page();
