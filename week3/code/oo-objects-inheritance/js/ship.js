/**
 *    Represents a Ship
 *    @constructor
 *    @param {string} owner
 *    @param {string} weight
 *    @param {string} cargo
 *    Commenting style: JSDoc
 */

function Ship(owner, weight, cargo){

 
    Transport.call(this, owner, weight);
    
    Object.defineProperty(this, "cargo", {
        get:function(){
            return cargo;
        },
        set:function(newCargo){
            cargo = newCargo;
        },
        enumerable: true,
        configurable: true
    });
}

//ship extends transport
Ship.prototype = new Transport(); //Object.create(Transport.prototype);
Ship.prototype.constructor = Ship; 

/** load new cargo */
Ship.prototype.load = function(){
    console.log(this.cargo);
}