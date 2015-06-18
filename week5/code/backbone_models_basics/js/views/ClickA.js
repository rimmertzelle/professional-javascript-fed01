/**
 * @constructor
 */
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
        this.model.set({blueColor: !this.model.get('blueColor')});
    }
});
