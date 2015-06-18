(function ()
{
    site.init = function ()
    {
        var matchesRouter = new site.routers.Matches();
        var matchesCollection = new site.collections.Matches();

        new site.views.TeamLinks({el: "#team-links", router: matchesRouter});
        new site.views.TeamMatches({el: "#team-matches", collection: matchesCollection});

        Backbone.history.start({pushState: true, root: site.settings.basePath});
    };

    site.$(site.init);
})();
