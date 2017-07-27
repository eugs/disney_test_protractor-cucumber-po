
var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');

var SearchPage = function (){};

inheritator.inherit(BasePage, SearchPage);

//TODO add option
SearchPage.prototype.getSortDropdown = function () {
  return browser.$('.dropdown.dma-dropdown.pull-right').click();
};

SearchPage.prototype.getMoviesElements = function () {
  return browser.$$('.padded-container.container.movielist li');
};

// SearchPage.prototype.getMoviesTitles = function () {
//   findMovieInList('')
// };

SearchPage.prototype.findMovieInList = function (title) {
   var arr = this.getMoviesElements();
   return arr.filter(function(elem) {
       return elem.getText().then(function(text) {
          console.log("title:", text);
                return text === title;
          });
      })

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


module.exports = SearchPage;
