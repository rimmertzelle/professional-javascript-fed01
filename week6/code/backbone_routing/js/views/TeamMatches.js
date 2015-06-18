site.views.TeamMatches = Backbone.View.extend({
    templateMatches: _.template(site.settings.templates.matches),
    templateError: _.template(site.settings.templates.error),

    initialize: function ()
    {
        site.events.on('newClub', this.loadMatches, this);
    },

    /**
     * Wrapper function to load the matches through the collection
     *
     * @param data
     */
    loadMatches: function (data)
    {
        this.collection.fetch({
            success: _.bind(this.loadMatchesSuccessHandler, this),
            error: _.bind(this.loadMatchesErrorHandler, this),
            data: {
                league: data.league,
                club: data.club
            }
        });
    },

    /**
     * Success Handler will add HTML of matches to this $el
     *
     * @param collection
     * @param response
     * @param options
     */
    loadMatchesSuccessHandler: function (collection, response, options)
    {
        this.$el.html(this.templateMatches({matches: response}));
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     * @param options
     */
    loadMatchesErrorHandler: function (collection, response, options)
    {
        var data = JSON.parse(response.responseText);
        this.$el.html(this.templateError({message: data.error}));
    }
});
