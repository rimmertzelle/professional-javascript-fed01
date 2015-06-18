(function ()
{
    site.init = function ()
    {
        new site.views.ClickA({el: "#clicker"});
        new site.views.BoxBlock({el: "#box"});
    };

    site.$(site.init);
})();
