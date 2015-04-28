(function () {
    window.site = {};
    site.$document = $(document);
    site.views = {};
    site.collections = {};
    site.models = {};
    site.routers = {};
    site.events = _.clone(Backbone.Events); //or _.extend({}, Backbone.Events);
})();