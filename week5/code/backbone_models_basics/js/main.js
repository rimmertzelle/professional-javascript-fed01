(function ()
{
    site.init = function ()
    {
        var settings = new site.models.Settings();
        new site.views.ClickA({el: "#clicker", model: settings});
        new site.views.BoxBlock({el: "#box", model: settings});
    };

    site.$(site.init);
})();
