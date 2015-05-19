/**
 *    Represents a Ship
 *    @constructor
 *    @param {string} owner
 *    @param {string} weight
 *    @param {string} cargo
 *    Commenting style: JSDoc
 */

function Ship(owner, weight, cargo) {
    Transport.call(this, owner, weight);

    Object.defineProperty(this, "cargo", {
        get: function () {
            return cargo;
        },
        set: function (newCargo) {
            cargo = newCargo;
        },
        enumerable: true,
        configurable: true
    });
}

//Ship extends transport
Ship.prototype = Object.create(Transport.prototype);

/** load new cargo */
Ship.prototype.load = function () {
    console.log(this.cargo);
};