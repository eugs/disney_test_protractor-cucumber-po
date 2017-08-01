var PageFactory = function() {
    var _this = this;
    _this.currentPage = 'undefined';

    _this.getPage = function(name) {
        var pages = {
            'movie': require('./MoviePage'),
            'results': require('./ResultsPage'),
            'main' : require('./MainPage'),
            'search' : require('./SearchPage')
        };

        if(!pages[name]) {
            throw new Error('No such page: ' + name);
        }

        _this.currentPage = new pages[name];
        return _this.currentPage;
    };
};

module.exports = new PageFactory();
