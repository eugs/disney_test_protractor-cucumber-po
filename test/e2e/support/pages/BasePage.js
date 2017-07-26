var BasePage = function(){};

  // BasePage.prototype

  BasePage.prototype.sayHello = function(){
      console.log('inherited!!');
      return browser.sleep(1000);
  };

module.exports = BasePage;
