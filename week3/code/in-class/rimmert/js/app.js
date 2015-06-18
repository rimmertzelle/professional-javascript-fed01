var Car = {};
    
    Object.defineProperties(Car, {
        _owner:{
            value: 'Geert',
            configurable: true,
            enumarable: true,
            writable: true
        },
        _weight:{
            value: 1500,
            configurable: true,
            enumarable: true,
            writable: true
        }

});

var myCar = new Car();