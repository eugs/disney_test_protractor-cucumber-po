var EC = protractor.ExpectedConditions;

var Header = function(){};

  Header.prototype.search = function(query) {
    console.log("searcff");
    var button = browser.$('#search');
    browser.wait(EC.elementToBeClickable(button), 5000)
      .then(()=> {
      button.click();
      })
      .then(()=> {
        var field = browser.$('#q');
        browser.wait(EC.visibilityOf(field), 5000).then(()=> {
          return field.sendKeys(query);
        });
      })
  };


  // Header.body = browser.$('.navbar.navbar-static-top.navbar-inverse');

  Header.prototype.clickOn = function(linkName) {
    // if window is small, it shows this button
    var pre = browser.$('.hamburger').click();

    var el = browser.element(by.cssContainingText('.navbar.navbar-static-top.navbar-inverse', linkName))

    browser.wait(EC.presenceOf(el, 5000)).then(()=> {
      return el.click();
    });
  };



module.exports = Header;
