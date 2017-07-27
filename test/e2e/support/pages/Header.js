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

  Header.prototype.getSearchPopup = function() {
    var popup = browser.$('#searchResults');

    return browser.wait(EC.presenceOf(popup, 5000)).then(()=> {
      return popup;
    });
  };

  Header.prototype.getSearchResults = function() {
    var popup = browser.$('#searchResults');
    //TODO slice the results for only 2
    return browser.wait(EC.presenceOf(popup, 5000)).then(()=> {
       return popup.$$('.row.padded-container.movielist a')
    });
  };

  Header.prototype.getAllResultsButton = function() {
    var popup = browser.$('#searchResults');
    return browser.wait(EC.presenceOf(popup, 5000)).then(()=> {
      return popup.$('a.allResults');
    })
  };

  Header.prototype.clickAllResultsButton = function() {
    this.getAllResultsButton().then((btn) => {
      btn.isDisplayed().then((visible)=> {
        if(visible) {
         btn.click();
        }  else {
         throw ("button 'All results' is invisible")
        }
      })
    });
  };




module.exports = Header;
