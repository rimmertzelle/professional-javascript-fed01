var myCar = new Car('Rimmert', 30, 'ZJ-GV-02');

console.log(myCar);
myCar.horn('Bleep');

var myShip = new Ship('Gerard', 40, 'Oil');
console.log(myShip);

myShip.horn('Whoop');
myShip.load();

console.log(myCar instanceof Car);
console.log(myCar instanceof Object);
console.log(myCar instanceof Transport);
console.log(myCar instanceof Ship);

console.log(myShip instanceof Car);
console.log(myShip instanceof Object);
console.log(myShip instanceof Transport);
console.log(myShip instanceof Ship);