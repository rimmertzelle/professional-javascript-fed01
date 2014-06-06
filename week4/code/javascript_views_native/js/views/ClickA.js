site.views.ClickA = function (el) {
    this.el = el;
    this.event = new CustomEvent("boxChange");

    this.init = function () {
        this.el.addEventListener('click', this.clickHandler.bind(this));
    };

    this.clickHandler = function (e) {
        e.preventDefault();
        document.dispatchEvent(this.event);
    };

    this.init();
};