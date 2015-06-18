/**
 * Function (simple factory) for creating Athletes
 * Params {json} data example [{name:'Rimmert'},{name:'Antwan'}]
 */
var createAthletes = function (data)
{
    var athletes = [];

    [].forEach.call(data, function (val, index, list)
    {
        var athlete = createAthlete(val);
        athletes.push(athlete);
    });

    return athletes;
};

/**
 * Factory that creates an Athlete
 * @param val
 */
var createAthlete = function (val)
{
    /**
     * Represents an Athlete
     * @param {string} name
     * @param {string} surname
     */
    var athlete = {};
    Object.defineProperties(athlete, {
        _name: { //data property
            value: val.name, //data property attribute; value of the attribute
            enumerable: false, //data property attribute; you can iterate over this property
            configurable: true, //data property attribute; is the property changeble
            writable: true //data property attribute; can the property be written to
        },
        name: { //accessor property
            get: function ()
            { //execute function when property is read
                console.log('Reading name');
                return this._name;
            },
            set: function (value)
            { //execute function when property is written
                console.log('Setting name to %s', value);
                if (typeof value != "string") {
                    value = "";
                }
                this._name = value;
            },
            enumerable: true,
            configurable: true
        }
    });

    return athlete;
};
