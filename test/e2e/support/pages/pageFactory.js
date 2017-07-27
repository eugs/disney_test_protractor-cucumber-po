var MoviePage = require('./MoviePage');
var SearchPage = require('./SearchPage');

var PageFactory = function(){
    var _this = this;
    _this.currentPage = 'undefined';

    _this.getPage = function(name){
        var pages = {
            'movie': MoviePage,
            'search': SearchPage
        };

        if(!pages[name]){
            throw new Error('No such page: ' + pages[name]);
        }

        _this.currentPage = new pages[name];
        return _this.currentPage;
    };
};

module.exports = new PageFactory();
