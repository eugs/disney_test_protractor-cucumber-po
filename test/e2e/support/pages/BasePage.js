// var Header = require('./Header.js');

var BasePage = function(){};

  // BasePage.prototype

  // BasePage.prototype.sayHello = function(){
  //     console.log('inherited!!');
  //     return browser.sleep(1000);
  // };

  BasePage.prototype.header = require('./Header.js');
  BasePage.prototype.videoPlayer = require('./VideoPlayer.js')

  



module.exports = BasePage;
