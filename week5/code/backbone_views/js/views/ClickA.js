site.views.ClickA = Backbone.View.extend({
    //el: '#clicker',
    events: {
        'click': 'clickHandler'
    },

    initialize: function () {

    },

    clickHandler: function (e) {
        e.preventDefault();
        site.events.trigger("boxChange");
    }
});
