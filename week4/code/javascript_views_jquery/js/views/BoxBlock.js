site.views.BoxBlock = function ($el) {
    this.$el = $el;

    this.init = function () {
        site.$document.on("boxChange", $.proxy(this.changeColor, this));
    };

    this.changeColor = function () {
        this.$el.addClass("blue");
    };

    this.init();
};