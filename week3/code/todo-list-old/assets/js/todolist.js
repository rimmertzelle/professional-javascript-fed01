//module pattern with namespacing
var toDoListApp = (function(toDoListApp){

	//constuctor to create the todolistitem
	var ToDoListItem = function (itemElement){
		
		//call the EventTarget constructor with the scope of this (list-item)
		EventTarget.call(this);

		//__el refers to a list-item	
		Object.defineProperty(this, "__el", {
			value: itemElement
		});
	};

	//Functions defined on the prototype of ToDoListItem
	ToDoListItem.prototype = Object.create(EventTarget.prototype, {
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
					/*
					//calls the _fire function
					this.__fire({
						type: "done",
						value: value
					});*/
				}
			}
    });

	//factory function to create some todolistitems
	var createToDoListItems = function(itemElements){
		var items = [];

		[].forEach.call(itemElements, function(el, index, array){
			var item = new ToDoListItem(el);
			items.push(item);
		});
		return items;
	};

	//todolist object
	var TodoList = function(todoListElement){
		
		EventTarget.call(this);

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

	//function to create one or multiple todolists
	toDoListApp.createToDoList = function(elementId){
		var element = document.getElementById(elementId);
		
		//if ul list doesn't exist create one.
		/*
		if(!element){
			element = document.createElement("UL");
			element.id = elementId;
			element.className = "newtodolist";
		}
		*/
		return new TodoList(element);
	};

	
	return toDoListApp;	//return the object 

}(toDoListApp || {})); //when todolistapp doesn't exist create one.