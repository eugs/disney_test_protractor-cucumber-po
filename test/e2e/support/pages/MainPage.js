var inheritator = require('../helpers/inheritator.js');
var BasePage = require('./BasePage.js');

var MainPage = function () {
  this.url = 'https://www.disneymoviesanywhere.com/';
};

inheritator.inherit(BasePage, MainPage);

module.exports = MainPage;
