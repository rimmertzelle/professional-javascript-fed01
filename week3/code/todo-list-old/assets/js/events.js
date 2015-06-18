/**
 * Created by hrs on 15/02/14.
 */

 var EventTarget = function(){
 	Object.defineProperty(this, "__listeners", {
 		value: {}
 	});
 }

Object.defineProperties(EventTarget.prototype,{
	addListener:{ //register a event
		value: function(type, listener){ 
			if(typeof this.__listeners[type] === 'undefined'){
				this.__listeners[type] = [];
			}
			this.__listeners[type].push(listener);
		},
		enumerable: true
	},
	__fire: {
		value: function(evtObj){
            console.log(evtObj);
            console.log(this);
            
            //addEventListener toevoegen or bind
            if(typeof evtObj.type === 'undefined'){
				throw new Error("Event object needs type");
			}
			if(typeof evtObj.target === "undefined"){
				evtObj.target = this;
			}
			var listeners = this.__listeners[evtObj.type];
			//console.log(listeners);
			if(typeof listeners === "undefined"){
				return;
			}
			for (var i = 0; i < listeners.length; i++) {
				listeners[i].call(this, evtObj);
            }

		}	
	},
	removeListener:{
		value: function(type, listener){
			var listeners = this.__listeners[type];

			if(typeof listeners === 'undefined'){
				return;
			}

			for (var i = 0; i < listeners.length; i++) {
				if(listeners[i] === listener) {
					listeners.splice(i,1);
					break;
				}
			}
		},
		enumerable: true
	}
});