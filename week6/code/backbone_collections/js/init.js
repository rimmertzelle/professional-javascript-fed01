(function () {
    window.site = {};
    site.$document = $(document);
    site.views = {};
    site.collections = {};
    site.models = {};
    site.events = _.clone(Backbone.Events);
})();