site.views.BoxBlock = function (el) {
    this.el = el;

    this.init = function () {
        document.addEventListener("boxChange", this.changeColor.bind(this));
    };

    this.changeColor = function () {
        this.el.classList.add('blue');
    };

    this.init();
};