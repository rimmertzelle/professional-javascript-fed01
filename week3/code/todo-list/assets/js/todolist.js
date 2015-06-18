//module pattern with namespacing
var toDoListApp = (function(toDoListApp){

	/**
	*    Represents a ToDoListItem
	*    @constructor
	*    @param {list item} itemElement
	*    Commenting style: JSDoc
	*/
	var ToDoListItem = function (itemElement){
		
		//__el refers to a list-item	
		Object.defineProperties(this, {
			__el: {
				value: itemElement
			},
			done: {
				get: function(){
					return !this.__el.classList.contains("done");
				},
				set: function(value){
					console.log(value);
					var currentValue = this.done;

					if(currentValue === value){
						return;
					}

					if(value){
						this.__el.classList.remove("done");
					}else{
						this.__el.classList.add("done");
					}
				}
			}
		});
	};

	/** factory function to create some todolistitems */
	var createToDoListItems = function(itemElements){
		var items = [];

		[].forEach.call(itemElements, function(el, index, array){
			var item = new ToDoListItem(el);
			items.push(item);
		});
		return items;
	};

	/**
	*    Represents a TodoList
	*    @constructor
	*    @param {list item} todoListElement
	*    Commenting style: JSDoc
	*/
	var TodoList = function(todoListElement){
		
		var items = todoListElement.querySelectorAll(".todo-item");
		
		Object.defineProperties(this, {
			__el: {
				value: todoListElement
			},
			items: {
				value: createToDoListItems(items),
				enumerable: true
			}
		});
	};

	/** function to create a todolist */
	toDoListApp.createToDoList = function(elementId){
		var element = document.getElementById(elementId);
		
		return new TodoList(element);
	};

	
	return toDoListApp;	//return the object 

}(toDoListApp || {})); //when todolistapp doesn't exist create one.