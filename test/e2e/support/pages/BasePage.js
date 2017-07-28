var BasePage = function(){};

BasePage.prototype.header = require('./Header.js');
BasePage.prototype.videoPlayer = require('./VideoPlayer.js')

BasePage.prototype.url = "";

BasePage.prototype.visit = function () {
    return browser.get(this.url);
};

module.exports = BasePage;
