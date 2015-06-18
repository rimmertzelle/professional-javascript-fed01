(function ()
{
    window.site = {};

    //jQuery
    site.$ = jQuery;
    site.$document = $(document);
    site.$window = $(window);

    //Backbone
    site.views = {};
    site.collections = {};
    site.models = {};
    site.routers = {};
    site.events = _.clone(Backbone.Events);
})();
