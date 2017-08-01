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

    return helper.waitForClickable(button).then(() => {
      return button.click().then(()=> {
          var field = browser.$(this.sels.INPUT_FIELD);
            return helper.waitForVisible(field).then(()=> {
              return field.sendKeys(query);
            })
        });
      });
  };

  this.clickOn = function(linkName) {
    var el = browser.element.all(by.cssContainingText(this.sels.BODY, linkName)).first();
    return helper.waitForPresence(el).then(() => {
      return el.click();
    });
  };

  this.hoverAndChoose = function(linkName, subOption) {
    var el = browser.element.all(by.cssContainingText(this.sels.BODY, linkName)).first();
    return helper.waitForPresence(el).then(()=> {
      return helper.hoverMouseOn(el)}).then(() => {

        var menuElem = browser.element(by.cssContainingText(this.sels.CATEGORY, subOption));

        return helper.waitForClickable(menuElem).then(()=> {
           return menuElem.click();
        });
    });
  };

  this.getSubNavigation = function() {
      var menu = browser.$(this.sels.SUB_MENU);
      return helper.waitForVisible(menu).then(()=> {
        return menu;
      });
  }

  this.getSearchPopup = function() {
    var popup = browser.$(this.sels.SEARCH_POPUP);
    return helper.waitForPresence(popup).then(() => {
      return popup;
    });
  };

  this.getSearchResults = function() {
    return this.getSearchPopup().then((popup) => {
     return popup.$$(this.sels.SEARCH_RESULTS)
    });
  };

  this.getAllResultsButton = function() {
    return this.getSearchPopup().then((popup) => {
      return popup.$(this.sels.ALL_RESULTS_BTN);
    })
  };

  this.clickAllResultsButton = function() {
    return this.getAllResultsButton().then((btn) => {
      return btn.isDisplayed().then((visible) => {
        if(visible) {
          return btn.click();
        }  else {
          throw ("there's no 'All results' button, possibly all search results presented in popup")
        }
      })
    });
  };

};

module.exports = new Header();
