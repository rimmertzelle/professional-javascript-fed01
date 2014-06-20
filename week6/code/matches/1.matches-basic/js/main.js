(function () {
    site.init = function () {
        var match = new site.models.Match();
        new site.views.MatchView({el:"#box", model:match});
    };

    site.$document.on('ready', site.init);
})();
