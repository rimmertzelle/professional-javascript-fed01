site.views.TeamLinks = Backbone.View.extend({
    events: {
        'click a': 'clickHandler'
    },

    initialize: function (properties)
    {
        this.router = properties.router;
    },

    /**
     * Click handler for links, retrieve data attributes and navigate router
     *
     * @param e
     */
    clickHandler: function (e)
    {
        e.preventDefault();
        var $target = $(e.currentTarget);
        var url = 'matches/' + $target.data('league') + '/' + $target.data('club');

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});
