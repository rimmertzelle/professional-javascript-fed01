/**
 * @constructor
 */
site.views.BoxBlock = Backbone.View.extend({
    initialize: function ()
    {
        this.model.on("change:blueColor", this.changeColor, this);
    },

    /**
     * @see site.views.BoxBlock.initialize
     */
    changeColor: function (model, blueColor)
    {
        if (blueColor) {
            this.$el.addClass("blue");
        } else {
            this.$el.removeClass("blue");
        }
    }
});
