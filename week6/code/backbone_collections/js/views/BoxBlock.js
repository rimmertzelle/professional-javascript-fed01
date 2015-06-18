site.views.BoxBlock = Backbone.View.extend({
    initialize: function ()
    {
        site.events.on("boxChange", this.changeColor, this);
    },

    /**
     * @see site.views.BoxBlock.initialize
     */
    changeColor: function ()
    {
        this.$el.addClass("blue");
        this.loadMatches();
    },

    /**
     * Wrapper function to load the matches through the collection
     */
    loadMatches: function ()
    {
        this.collection.fetch({
            success: _.bind(this.loadMatchesSuccessHandler, this),
            error: _.bind(this.loadMatchesErrorHandler, this),
            data: {
                league: 'PrimeraDivision',
                club: 'Getafe'
            }
        });
    },

    /**
     * @param collection
     * @param response
     * @param options
     */
    loadMatchesSuccessHandler: function (collection, response, options)
    {
        console.log("SUCCESS");
        console.dir(collection);
        console.dir(collection.models);

        //Example of using models to filter data in new variable
        var homeMatches = collection.filter(function (match)
        {
            return match.get('homeClub') == 'Getafe';
        });

        console.dir(homeMatches);
    },

    /**
     * @param collection
     * @param response
     * @param options
     */
    loadMatchesErrorHandler: function (collection, response, options)
    {
        console.log("ERROR");
        console.dir(collection);
        console.dir(response);
        console.dir(options);
    }
});
