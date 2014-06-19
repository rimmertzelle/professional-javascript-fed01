(function () {
    window.site = {};
    site.$document = $(document);
    site.views = {};
    site.events = _.clone(Backbone.Events);
})();