(function () {
    site.init = function () {
        new site.views.ClickA($("#clicker"));
        new site.views.BoxBlock($("#box"));
    };

    site.$document.on('ready', site.init);
})();