/**
 * @param el
 * @constructor
 */
site.views.ClickA = function (el)
{
    this.el = el;
    this.event = new CustomEvent("boxChange");

    this.init = function ()
    {
        //Add a click listener to the element.
        this.el.addEventListener('click', this.clickHandler.bind(this)); //you have to use bind in order to add the right scope
    };

    /**
     * @param e
     */
    this.clickHandler = function (e)
    {
        e.preventDefault();
        document.dispatchEvent(this.event);
    };

    //Initialize object
    this.init();
};
