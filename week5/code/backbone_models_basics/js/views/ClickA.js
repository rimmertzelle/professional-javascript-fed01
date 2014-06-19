site.views.ClickA = Backbone.View.extend({
    clickToggle: false,

    events: {
        'click': 'clickHandler'
    },

    initialize: function () {

    },

    /**
     * @param e
     * @see site.views.ClickA.events
     */
    clickHandler: function (e) {
        e.preventDefault();

        this.clickToggle = !this.clickToggle;
        this.model.set({clickToggle: this.clickToggle});
    }
});
