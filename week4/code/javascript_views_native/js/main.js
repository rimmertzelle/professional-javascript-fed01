(function () {
    site.init = function () {
        new site.views.ClickA(document.getElementById("clicker"));
        new site.views.BoxBlock(document.getElementById("box"));
    };

    window.addEventListener('load', site.init);
})();