/**
 * @param owner
 * @param weight
 * @param licensePlate
 * @constructor
 */
function Car(owner, weight, licensePlate)
{
    Transport.call(this, owner, weight);
    this.licensePlate = licensePlate;
}

/**
 * @type {Transport}
 */
Car.prototype = Object.create(Transport.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: Car
    }
});
