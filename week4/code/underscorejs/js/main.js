/**
 * Underscore uses native fallbacks when available. It has a lot of handy features, below a few examples
 *
 * Note: always try to use a native method when your requirements allow you to. It's always faster!
 */

var data = [
    {
        title: "Article 1",
        order: 3,
        status: 1
    },
    {
        title: "Article 2",
        order: 1,
        status: 0
    },
    {
        title: "Article 3",
        order: 2,
        status: 1,
        awesome: true
    }
];
console.log("Data", data);


//Alter data with the _.each method, using _.random to create different numbers for our images
_.each(data, function (item, index, list)
{
    item.imageUrl = "http://lorempixel.com/" + _.random(200, 600) + "/" + _.random(200, 600) + "/";
});


//Filter data by property with _.filter
var publishedData = _.filter(data, function (item, index, list)
{
    return item.status == 1;
});
console.log("_.filter:publishedData", publishedData);


//Order by property with _.sortBy
var orderedData = _.sortBy(data, 'order');
console.log("_.sortBy:orderedData", orderedData);


//Get the first element from the array with _.first
console.log(_.first(data));


//'this' scoping (same as native .bind/$.proxy) with _.bind
var Header = function ()
{
    this.init = function ()
    {
//        document.getElementById("title").addEventListener('click', this.click);
        document.getElementById("title").addEventListener('click', _.bind(this.click, this));
    };

    this.click = function ()
    {
        console.log("_.bind:this", this);
    };

    this.init();
};
var header = new Header();


//Prevent too many triggers for resize event with _.debounce
function resizeHandler()
{
    console.log("_.debounce:resize");
}
//window.addEventListener('resize', resizeHandler);
window.addEventListener('resize', _.debounce(resizeHandler, 200));


//Using _.isEqual for deep comparison of objects. _.clone results in identical object
console.log("_.isEqual:orderedData/publishedData", _.isEqual(orderedData, publishedData));
console.log("_.isEqual:orderedData/data", _.isEqual(orderedData, data));
console.log("_.isEqual:_.clone(data)/data", _.isEqual(_.clone(data), data));


//Extract functions to analyze an object
console.log("_.functions:header", _.functions(header));


//Check undefined state of variable
console.log("_.isUndefined:data[0].awesome", _.isUndefined(data[0].awesome));
console.log("_.isUndefined:data[2].awesome", _.isUndefined(data[2].awesome));


//Extending the _ functionality with your own Utils
_.mixin({
    isIE8OrLower: function ()
    {
        return navigator.userAgent.match(/MSIE\s/) !== null ? document.all && !document.addEventListener : false;
    }
});
console.log("_.mixin:_.isIE8OrLower", _.isIE8OrLower());


//Using _.template to generate HTML without any HTML in JS, HTML needs to be loaded first from external template file
function articlesHtmlLoaded(html)
{
    console.log("_.template:before", html);
    var articlesTemplate = _.template(html);
    var articlesHtml = articlesTemplate({articles: publishedData});
    console.log("_.template:after", articlesHtml);
    $('#articles').append(articlesHtml);
}
$.get('templates/articles.html', articlesHtmlLoaded);
