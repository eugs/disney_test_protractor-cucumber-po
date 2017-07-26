var Header = require('./Header.js')

var BasePage = function(){};

  // BasePage.prototype

  BasePage.prototype.sayHello = function(){
      console.log('inherited!!');
      return browser.sleep(1000);
  };

  BasePage.prototype.header = new Header();

  // BasePage.prototype.search = function(query){
  //   return this.header.search(query);
  // };




module.exports = BasePage;
