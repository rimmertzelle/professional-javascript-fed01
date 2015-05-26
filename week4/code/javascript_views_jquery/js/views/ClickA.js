site.views.ClickA = function ($el) {
    this.$el = $el;

    this.init = function () {
        this.$el.on('click', this.clickHandler);
    };

    this.clickHandler = function (e) {
        e.preventDefault();
        site.$document.trigger("boxChange");
    };

    this.init();
};