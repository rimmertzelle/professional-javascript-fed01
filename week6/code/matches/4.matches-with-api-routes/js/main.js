(function () {
    site.init = function () {

        var matchesRouter = new site.routers.Router();
        var match = new site.models.Match();
        var matches = new site.collections.Matches();

        new site.views.MatchView({el:"#box", model:match}); //can you delete this, because it is triggered in ListView
        new site.views.MatchesListView({el:"#box", collection: matches});

        Backbone.history.start();
    };

    site.$document.on('ready', site.init);



})();
