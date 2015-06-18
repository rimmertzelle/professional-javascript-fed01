(function ()
{
    window.site = {};
    site.$ = jQuery;
    site.$document = $(document);
    site.$window = $(window);

    site.views = {};
    site.models = {};
    site.events = _.clone(Backbone.Events);
})();
