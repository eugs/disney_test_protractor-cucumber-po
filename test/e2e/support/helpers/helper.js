
var EC = protractor.ExpectedConditions;

var helper = function () {

  this.waitForPresence = function (element) {
     return browser.wait(EC.presenceOf(element, 5000));
  }

  this.waitForStale = function (element) {
    return browser.wait(EC.stalenessOf(element, 5000));
  }

  this.waitForVisible = function (element) {
    return browser.wait(EC.visibilityOf(element), 5000);
  }

  this.waitForClickable = function (element) {
    return browser.wait(EC.elementToBeClickable(element), 5000)
  }


//  JS actions
  this.JS_click = function (element) {
     return browser.executeScript("arguments[0].click();", element.getWebElement())
  }

  this.JS_scroll = function (element) {
    return browser.driver.executeScript("arguments[0].scrollIntoView();", element.getWebElement())
  }

// Actions
  this.hoverMouseOn = function (element) {
    return browser.actions().mouseMove(element).perform()
  }

  this.pauseFor = function (milliseconds) {
    return browser.sleep(milliseconds);
  }

}

module.exports = new helper()
