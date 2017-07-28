
var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');
var EC = protractor.ExpectedConditions;

var ResultsPage = function (){};

inheritator.inherit(BasePage, ResultsPage);

//TODO add option
ResultsPage.prototype.getSortDropdown = function () {
  return browser.$('.dropdown.dma-dropdown.pull-right').click();
};

ResultsPage.prototype.getMoviesElements = function () {
  return browser.$$('.padded-container.container.movielist li');
};

ResultsPage.prototype.getCategoryTitle = function () {
  return browser.$('.hero-title.text-white.ng-binding');
};

ResultsPage.prototype.findMovieInList = function (title) {
  var selector = browser.element.all(by.cssContainingText('.padded-container.container.movielist li a', title)).first();

  browser.wait(EC.presenceOf(selector), 5000)
    .then(()=> {
      browser.driver.executeScript("arguments[0].scrollIntoView();", selector.getWebElement())
      return selector.click();
    })
    // .then(()=> {
    //   return cb;
    // });

  // WORKING VERSION
  //  var arr = this.getMoviesElements();
  //  return arr.filter(function(elem) {
  //      return elem.getText().then(function(text) {
  //         console.log("title:", text);
  //               return text === title;
  //         });
  //     })

      // var arr = this.getMoviesElements();
      // return arr.filter(function(elem) {
      //     return elem.getText().then(function(text) {
      //        console.log("title:", text);
      //              return text === title;
      //        });
      //    }).click();

};


// var els = element.all(by.css('selector'));
// els.filter(function(elem) {
//   return elem.getText().then(function(text) {
//     return text === 'should click';
//   });
// }).click();


module.exports = ResultsPage;
