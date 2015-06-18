/**
 * @param $el
 * @constructor
 */
site.views.BoxBlock = function ($el)
{
    this.$el = $el;

    this.init = function ()
    {
        //Listen to event & use proxy (jQuerys way to bind) for event
        site.$document.on("boxChange", $.proxy(this.changeColor, this));
    };

    /**
     * Toggle color by class
     */
    this.changeColor = function ()
    {
        this.$el.toggleClass("blue");
    };

    //Initialize object
    this.init();
};
