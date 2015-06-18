site.views.ClickA = Backbone.View.extend({
    events: {
        'click': 'clickHandler'
    },

    initialize: function ()
    {

    },

    /**
     * @param e
     * @see site.views.ClickA.events
     */
    clickHandler: function (e)
    {
        e.preventDefault();
        site.events.trigger("boxChange");
    }
});
