(function () {
    site.init = function () {
        var matches = new site.collections.Matches();
        new site.views.ClickA({el: "#clicker"});
        new site.views.BoxBlock({el: "#box", collection: matches});
    };

    site.$document.on('ready', site.init);
})();