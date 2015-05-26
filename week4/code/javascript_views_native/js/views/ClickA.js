site.views.ClickA = function (el) {
    this.el = el;
    this.event = new CustomEvent("boxChange");
    /*
    *   Add a click listener to the element. 
    */
    this.init = function () {
        this.el.addEventListener('click', this.clickHandler.bind(this)); //you have to use bind in order to add the right scope
    };

    this.clickHandler = function (e) {
        e.preventDefault();
        console.log(this);// check the scope if you delete .bind(this);
        document.dispatchEvent(this.event);
    };

    this.init();
};