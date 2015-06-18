/**
 * @param $el
 * @constructor
 */
site.views.ClickA = function ($el)
{
    this.$el = $el;

    this.init = function ()
    {
        //Add a click listener to the element.
        this.$el.on('click', this.clickHandler);
    };

    /**
     * @param e
     */
    this.clickHandler = function (e)
    {
        e.preventDefault();
        site.$document.trigger("boxChange");
    };

    //Initialize object
    this.init();
};
