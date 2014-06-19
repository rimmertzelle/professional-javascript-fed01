site.views.BoxBlock = Backbone.View.extend({
    initialize: function () {
        site.events.on("boxChange", this.changeColor, this);
    },

    changeColor: function () {
        this.$el.toggleClass("blue");
    }
});