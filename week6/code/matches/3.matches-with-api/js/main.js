(function () {
    site.init = function () {

        var match = new site.models.Match();
        var matches = new site.collections.Matches();

        new site.views.MatchView({el:"#box", model:match});
        new site.views.MatchesListView({el:"#box", collection: matches});
    };

    site.$document.on('ready', site.init);
})();
