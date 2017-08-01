var helper = require('../helpers/helper.js')

var Header = function() {

  this.sels = {
          SEARCH_BTN : '#search',
          INPUT_FIELD :'#q',
          BODY : '.navbar.navbar-static-top.navbar-inverse span',
          CATEGORY : 'li[role="menuitem"] a',
          SUB_MENU : '#subnav-browse.subnav.in',
          SEARCH_POPUP : '#searchResults',
          SEARCH_RESULTS : '.row.padded-container.movielist a',
          ALL_RESULTS_BTN : 'a.allResults'
  };

  this.search = function(query) {
    var button = browser.$(this.sels.SEARCH_BTN);

    // browser.wait(EC.elementToBeClickable(button), 5000)
    return helper.waitForClickable(button).then(()=> {
      return button.click();
      }).then(()=> {
        var field = browser.$(this.sels.INPUT_FIELD);
        // browser.wait(EC.visibilityOf(field), 5000).then(()=> {
        return helper.waitForVisible(field).then(()=> {
          return field.sendKeys(query);
        });
      })
  };

  this.clickOn = function(linkName) {
    //TODO
    // if window is small, it shows this button
    // var pre = browser.$('.hamburger').click();

    var el = browser.element.all(by.cssContainingText(this.sels.BODY, linkName)).first();
    // browser.wait(EC.presenceOf(el, 5000)).then(()=> {
    return helper.waitForPresence(el).then(() => {
      return el.click();
    });
  };

  this.hoverAndChoose = function(linkName, subOption) {

    // if window is small, it shows this button
    // var pre = browser.$('.hamburger').click();

    var el = browser.element.all(by.cssContainingText(this.sels.BODY, linkName)).first();
    // return browser.wait(EC.presenceOf(el, 5000)).then(()=> {
    return helper.waitForPresence(el).then(()=> {
      // return browser.actions().mouseMove(el).perform()
      return helper.hoverMouseOn(el)
    })
    .then(() => {
        var menuElem = browser.element(by.cssContainingText(this.sels.CATEGORY, subOption));

        // return browser.wait(EC.elementToBeClickable(menuElem, 5000))
        return helper.waitForClickable(menuElem)
          .then(()=> {
            console.log("click");
            // menuElem.getText()
            //   .then((txt)=> {
            //     console.log("text", txt);
            //   })
           return menuElem.click();

        });
    });
  };

  this.getSubNavigation = function() {
      var menu = browser.$(this.sels.SUB_MENU);
      // browser.wait(EC.visibilityOf(menu, 5000)).then(()=> {
      return helper.waitForVisible(menu).then(()=> {
        return menu;
      });
  }

  this.getSearchPopup = function() {
    var popup = browser.$(this.sels.SEARCH_POPUP);

    // return browser.wait(EC.presenceOf(popup, 5000)).then(()=> {
    return helper.waitForPresence(popup).then(() => {
      return popup;
    });
  };

  this.getSearchResults = function() {
    // var popup = browser.$('#searchResults');
    //TODO slice the results for only 2
    // return browser.wait(EC.presenceOf(popup, 5000)).then(()=> {
      // return helper.waitForPresence(popup).then(()=> {
      return this.getSearchPopup().then((popup) => {
        console.log("GET RESULTS");
       return popup.$$(this.sels.SEARCH_RESULTS)
    });
  };

  this.getAllResultsButton = function() {
    // var popup = browser.$('#searchResults');
    // return browser.wait(EC.presenceOf(popup, 5000)).then(()=> {
    //
    return this.getSearchPopup().then((popup) => {
      console.log("GET RESULTS");
      return popup.$(this.sels.ALL_RESULTS_BTN);
    })
  };

  this.clickAllResultsButton = function() {
    return this.getAllResultsButton().then((btn) => {
      return btn.isDisplayed().then((visible) => {
        if(visible) {
         return btn.click();
        }  else {
         throw ("button 'All results' is invisible")
        }
      })
    });
  };

};

module.exports = new Header();
