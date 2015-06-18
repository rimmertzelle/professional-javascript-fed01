/**
 * @param owner
 * @param weight
 * @param cargo
 * @constructor
 */
function Ship(owner, weight, cargo)
{
    Transport.call(this, owner, weight);
    this.cargo = cargo;
}

/**
 * @type {Transport}
 */
Ship.prototype = Object.create(Transport.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: Ship
    }
});
