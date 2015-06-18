/*
 *  Initieren van de todo-app
 *  click handler toevoegen.
 *  callback van de listener toevoegen.
 *  TODO
 */

//create a todolist based on a existing ul
var toedeloo = toDoListApp.createToDoList('todo-items');
console.log(toedeloo.items[0].__el);
console.log(toedeloo.items);

//clickhandler on ul list
$('#todo-items').on('click','li', function(event){
    //see wich element is clicked on
    var clickedElement = $(event.target).text();
    console.log(clickedElement);
    //walk down the list of todo-items en see which element is clicked on
    [].forEach.call(toedeloo.items, function(el, index, array){
        //if clickitem is found in de todolist, change it to done. 
        if(el.__el.innerText == ''+clickedElement){
            if(toedeloo.items[index].done === false){
                toedeloo.items[index].done = true;
            }else{
                toedeloo.items[index].done = false;
            }
        }   
    });    
});