/**
 * Represents an Athlete
 * @param {string} name
 * @param {string} surname
 * Commenting style: JSDoc
 */
var athlete = {};

Object.defineProperties(athlete, {
    _name: {
        value: "Rimmert",
        enumerable: false,
        configurable: true,
        writable: true
    },
    _surname: {
        value: "Zelle",
        enumerable: false,
        configurable: true,
        writable: true
    },
    name: {
        get: function ()
        {
            console.log('Reading name');
            return this._name;
        },
        set: function (value)
        {
            if (typeof value != "string") {
                value = "";
            }

            console.log('Setting name to %s', value);
            this._name = value;
        },
        enumerable: true,
        configurable: true
    },
    surname: {
        get: function ()
        {
            console.log('Reading name');
            return this._surname;
        },
        set: function (value)
        {
            console.log('Setting name to %s', value);
            this._surname = value;
        },
        enumerable: true,
        configurable: true
    }
});
