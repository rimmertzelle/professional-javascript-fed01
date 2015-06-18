var site = (function (site)
{
    /**
     * Create toolbar item object with activated/enabled states
     *
     * @param item
     * @returns {*}
     */
    var createToolbarItem = function (item)
    {
        var newItem = {
            toggleActiveState: function ()
            {
                this.activated = !this.activated;
            }
        };

        Object.defineProperties(newItem, {
            el: {
                value: item
            },
            enabled: {
                get: function ()
                {
                    return !this.el.classList.contains('disabled');
                },
                set: function (value)
                {
                    if (value) {
                        this.el.classList.remove('disabled');
                    } else {
                        this.el.classList.add('disabled');
                    }
                }
            },
            activated: {
                get: function ()
                {
                    return this.el.classList.contains('active');
                },
                set: function (value)
                {
                    if (value) {
                        this.el.classList.add('active');
                    } else {
                        this.el.classList.remove('active');
                    }
                }
            }
        });

        return newItem;
    };

    /**
     * Create more toolbar items combined as array
     *
     * @param itemElements
     * @returns {Array}
     */
    var createToolbarItems = function (itemElements)
    {
        var items = [];

        [].forEach.call(itemElements, function (item, index, list)
        {
            items.push(createToolbarItem(item));
        });

        return items;
    };

    /**
     * Create a object with methods on our global namespace
     */
    site.createToolbar = function (elementId)
    {
        var toolbar = {};

        Object.defineProperties(toolbar, {
            //el needs to be writable when ID doesn't exist in current DOM
            el: {
                value: document.getElementById(elementId),
                writable: true
            },
            id: {
                value: elementId
            },
            items: {
                value: [],
                writable: true,
                enumerable: true
            }
        });

        /**
         * Initialize object
         *
         * @param arguments
         */
        toolbar.init = function (arguments)
        {
            //If element doesn't exist, create new toolbar
            if (!this.el) {
                this.createNew();

                //Append to given parent, else to body
                var appendParent = arguments.length == 1 ? document.body : document.getElementById(arguments[1]);
                appendParent.appendChild(this.el);
            } else {
                //When element exists, create item instances for current DOM elements
                this.items = createToolbarItems(this.el.querySelectorAll(".toolbar-item"));
            }

            //Event Handling
            this.el.addEventListener('click', this.clickHandler.bind(this));
        };

        /**
         * Create a new DOM element
         */
        toolbar.createNew = function ()
        {
            //New element with desired ID & classes
            this.el = document.createElement("div");
            this.el.classList.add("toolbar");
            this.el.id = this.id;

            //Initial buttons for start up
            for (var i = 0; i < 3; i++) {
                this.addButton();
            }
        };

        /**
         * Functionality to add a new button to the list
         */
        toolbar.addButton = function ()
        {
            var buttonEl = document.createElement("div");
            buttonEl.classList.add("toolbar-item");
            this.el.appendChild(buttonEl);
            this.items.push(createToolbarItem(buttonEl));
        };

        /**
         * Remove the button on the given index
         *
         * @param index
         */
        toolbar.removeButton = function (index)
        {
            if (typeof this.items[index] == "undefined") {
                return;
            }

            this.el.removeChild(this.items[index].el);
            this.el.splice(index, 1);
        };

        /**
         * Handler for clicking the toolbar
         *
         * @param e
         */
        toolbar.clickHandler = function (e)
        {
            e.preventDefault();

            //Some weird logic to check if item has class & inside a filter for === selector on all items and clicked item.. hmmm
            if (e.target.classList.contains('toolbar-item')) {
                var myItem = {};

                this.items.forEach(function (item, index)
                {
                    if (item.el === e.target) {
                        myItem = item;
                    }
                });

                myItem.toggleActiveState();
            }
        };

        //Call 'constructor' & return instance
        toolbar.init(arguments);
        return toolbar;
    };

    return site;
}(site || {}));
