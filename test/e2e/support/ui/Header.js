var EC = protractor.ExpectedConditions;
var helper = require('../helpers/helper.js')

var Header = function(){};

  Header.prototype.search = function(query) {
    var button = browser.$('#search');

    // browser.wait(EC.elementToBeClickable(button), 5000)
    return helper.waitForClickable(button).then(()=> {
      return button.click();
      }).then(()=> {
        var field = browser.$('#q');
        // browser.wait(EC.visibilityOf(field), 5000).then(()=> {
        return helper.waitForVisible(field).then(()=> {
          return field.sendKeys(query);
        });
      })
  };

  Header.prototype.clickOn = function(linkName) {
    //TODO
    // if window is small, it shows this button
    // var pre = browser.$('.hamburger').click();

    var el = browser.element.all(by.cssContainingText('.navbar.navbar-static-top.navbar-inverse span', linkName)).first();
    // browser.wait(EC.presenceOf(el, 5000)).then(()=> {
    return helper.waitForPresence(el).then(() => {
      return el.click();
    });
  };

  Header.prototype.hoverAndChoose = function(linkName, subOption) {

    // if window is small, it shows this button
    // var pre = browser.$('.hamburger').click();

    var el = browser.element.all(by.cssContainingText('.navbar.navbar-static-top.navbar-inverse span', linkName)).first();
    // return browser.wait(EC.presenceOf(el, 5000)).then(()=> {
    return helper.waitForPresence(el).then(()=> {
      // return browser.actions().mouseMove(el).perform()
      return helper.hoverMouseOn(el)
    })
    .then(() => {
        var menuElem = browser.element(by.cssContainingText('li[role="menuitem"] a', subOption));

        // return browser.wait(EC.elementToBeClickable(menuElem, 5000))
        return helper.waitForClickable(menuElem)
          .then(()=> {
            console.log("CLICKABLA");
            // menuElem.getText()
            //   .then((txt)=> {
            //     console.log("text", txt);
            //   })
           return menuElem.click();

        });
    });
  };

  Header.prototype.getSubNavigation = function() {
      var menu = browser.$('#subnav-browse.subnav.in');
      // browser.wait(EC.visibilityOf(menu, 5000)).then(()=> {
      return helper.waitForVisible(menu).then(()=> {
        return menu;
      });
  }

  Header.prototype.getSearchPopup = function() {
    var popup = browser.$('#searchResults');

    // return browser.wait(EC.presenceOf(popup, 5000)).then(()=> {
    return helper.waitForPresence(popup).then(()=> {
      return popup;
    });
  };

  Header.prototype.getSearchResults = function() {
    // var popup = browser.$('#searchResults');
    //TODO slice the results for only 2
    // return browser.wait(EC.presenceOf(popup, 5000)).then(()=> {
      // return helper.waitForPresence(popup).then(()=> {
      return this.getSearchPopup().then((popup)=> {
        console.log("GET RESULTS");
       return popup.$$('.row.padded-container.movielist a')
    });
  };

  Header.prototype.getAllResultsButton = function() {
    // var popup = browser.$('#searchResults');
    // return browser.wait(EC.presenceOf(popup, 5000)).then(()=> {
    //
    return this.getSearchPopup().then((popup)=> {
      console.log("GET RESULTS");
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


module.exports = new Header();
