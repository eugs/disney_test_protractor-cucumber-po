var MoviePage = require('./MoviePage');

var PageFactory = function(){
    var _this = this;
    _this.currentPage = 'undefined';

    _this.getPage = function(name){
        var pages = {
            'movie': MoviePage
        };

        if(!pages[name]){
            throw new Error('No such page: ' + pages[name]);
        }

        _this.currentPage = new pages[name];

        return _this.currentPage;
    };
};

module.exports = new PageFactory();
