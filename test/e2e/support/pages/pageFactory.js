var MoviePage = require('./MoviePage');
var ResultsPage = require('./ResultsPage');
var MainPage = require('./MainPage');

var PageFactory = function(){
    var _this = this;
    _this.currentPage = 'undefined';

    _this.getPage = function(name) {
        var pages = {
            'movie': MoviePage,
            'results': ResultsPage,
            'main' : MainPage
        };

        if(!pages[name]) {
            throw new Error('No such page: ' + name);
        }

        _this.currentPage = new pages[name];
        return _this.currentPage;
    };
};

module.exports = new PageFactory();
