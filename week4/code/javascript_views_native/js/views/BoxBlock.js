/**
 * @param el
 * @constructor
 */
site.views.BoxBlock = function (el)
{
    this.el = el;

    this.init = function ()
    {
        //Add event listener to the Dom. If a boxchange event is triggered fire changeColor
        document.addEventListener("boxChange", this.changeColor.bind(this));
    };

    /**
     * Toggle color by class
     */
    this.changeColor = function ()
    {
        console.log(this);
        this.el.classList.toggle('blue');
    };

    //Initialize object
    this.init();
};
