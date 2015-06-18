(function ()
{
    site.init = function ()
    {
        new site.views.ClickA($("#clicker"));
        new site.views.BoxBlock($("#box"));
    };

    //Document ready
    site.$(site.init);
})();
