/**
 *    Represents a Car
 *    @constructor
 *    @param {string} owner
 *    @param {string} weight
 *    @param {string} licensePlate
 *    Commenting style: JSDoc
 */

function Car(owner, weight, licensePlate){

    Transport.call(this, owner, weight);
   
    this.licensePlate = licensePlate;
}

//Car extends Transport
Car.prototype = new Transport();//Object.create(Transport.prototype);
Car.prototype.constructor = Car;