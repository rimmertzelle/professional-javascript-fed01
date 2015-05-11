/**
 *    Represents toDoListApp
 *    @param toDoListApp
 *    module pattern with namespacing
 */
var toDoListApp = (function (toDoListApp) {

    //factory pattern for creating todo items
    /** function for creating todolist items */
    var createToDoListItems = function (itemElements) {
        var items = [];

        //items element is een nodelist. Call() to shift the context. Add to array
        [].forEach.call(itemElements, function (el, index, array) {

            var item = {

            };

            Object.defineProperties(item, {
                el: { //readonly property
                    value: el
                },
                done: {
                    get: function () {
                        return !this.el.classList.contains("done");
                    },
                    set: function (value) {
                        if (value) {
                            this.el.classList.remove("done");
                        } else {
                            this.el.classList.add("done");
                        }
                    }
                }
            });

            items.push(item);
        });
        return items;
    };

    /** function for creating todolists */
    toDoListApp.createToDoList = function (elementId) {
        var element = document.getElementById(elementId);
        var items = element.querySelectorAll(".todo-item");
        return{
            items: createToDoListItems(items)
        }
    };

    return toDoListApp;	//return the object

}(toDoListApp || {})); //when todolistapp doesn't exist create one.