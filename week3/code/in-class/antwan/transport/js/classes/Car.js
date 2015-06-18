/**
 * @param owner
 * @param weight
 * @param licencePlate
 * @constructor
 */
function Car(owner, weight, licencePlate) {
    Transport.call(this, owner, weight);
    this.licencePlate = licencePlate;
}

/**
 * @type {Transport}
 */
Car.prototype = Object.create(Transport.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Car,
        writable: true
    }
});
