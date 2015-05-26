site.views.BoxBlock = function (el) {
    this.el = el;
    /*
    *   Add event listener to the Dom. If a boxchange event is triggered fire changeColor
    */
    this.init = function () {
        document.addEventListener("boxChange", this.changeColor.bind(this));
    };

    this.changeColor = function () {
        console.log(this);
        this.el.classList.add('blue');
    };

    this.init();
};