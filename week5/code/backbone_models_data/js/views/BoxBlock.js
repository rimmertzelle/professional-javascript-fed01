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
     * Wrapper function to load the matches through the model
     */
    loadMatches: function ()
    {
        this.model.fetch({
            success: _.bind(this.loadMatchesSuccessHandler, this),
            error: _.bind(this.loadMatchesErrorHandler, this),
            data: {
                league: 'PrimeraDivision',
                club: 'Getafe'
            }
        });
    },

    /**
     * @param model
     * @param response
     * @param options
     */
    loadMatchesSuccessHandler: function (model, response, options)
    {
        console.log("SUCCESS");
        console.dir(model);
        console.dir(response);
        console.dir(options);
    },

    /**
     * @param model
     * @param response
     * @param options
     */
    loadMatchesErrorHandler: function (model, response, options)
    {
        console.log("ERROR");
        console.dir(model);
        console.dir(response);
        console.dir(options);
    }
});
