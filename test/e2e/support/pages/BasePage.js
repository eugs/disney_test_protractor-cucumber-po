var BasePage = function(){};

BasePage.prototype.header = require('../ui/Header.js');
BasePage.prototype.videoPlayer = require('../ui/VideoPlayer.js')
BasePage.prototype.loginPopup = require('../ui/LoginPopup.js')

BasePage.prototype.url = "";

BasePage.prototype.visit = function () {
    return browser.get(this.url);
};

module.exports = BasePage;
