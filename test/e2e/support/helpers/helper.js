
var EC = protractor.ExpectedConditions;
var TIMEOUT = 5000;

var helper = function () {

// Waits

  this.waitForPresence = function (element) {
     return browser.wait(EC.presenceOf(element, TIMEOUT));
  }

  this.waitForStale = function (element) {
    return browser.wait(EC.stalenessOf(element, TIMEOUT));
  }

  this.waitForVisible = function (element) {
    return browser.wait(EC.visibilityOf(element, TIMEOUT));
  }

  this.waitForClickable = function (element) {
    return browser.wait(EC.elementToBeClickable(element, TIMEOUT));
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

  this.getFrame = function (frame_loc) {
    var el = browser.driver.findElement(frame_loc);
    return browser.switchTo().frame(el)
      .then(() => {
        return el;
      })
  }


}

module.exports = new helper()
