/**
 *    Represents a Transport
 *    @constructor
 *    @param {string} pOwner
 *    @param {string} pWeight
 *    Commenting style: JSDoc
 */

function Transport(pOwner, pWeight) {
    this.owner = pOwner;
    this.weight = pWeight;

    //This is also possible
    // Object.defineProperties(this, {
    //     _owner:{
    //         value: pOwner
    //     },
    //     _weight:{
    //         value: pWeight
    //     },
    //     owner:{
    //         get:function(){
    //             return _owner;
    //         },
    //         set:function(newowner){
    //             _owner = newowner;
    //         },
    //         enumerable: true,
    //         configurable: true
    //     }
    // });
}

/** Function to produce some noise  */
Transport.prototype.horn = function (noise) {
    console.log('Hello: ' + noise + ' ' + noise);
};