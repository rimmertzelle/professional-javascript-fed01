site.views.BoxBlock = Backbone.View.extend({
    initialize: function () {
        this.model.on("change:clickToggle", this.changeColor, this);
    },

    /**
     * @see site.views.BoxBlock.initialize
     */
    changeColor: function (model, clickToggle) {
        if (clickToggle) {
            this.$el.addClass("blue");
        } else {
            this.$el.removeClass("blue");
        }
    }
});