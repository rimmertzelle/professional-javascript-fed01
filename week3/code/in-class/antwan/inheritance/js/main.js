function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};
Rectangle.prototype.toString = function () {
    return "[Rectangle " + this.length + "x" + this.width + "]";
};

function Square(size) {
    Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Square,
        writable: true
    }
});

Square.prototype.toString = function () {
    var text = Rectangle.prototype.toString.call(this);
    return text.replace("Rectangle", "Square");
};

var rectangle = new Rectangle(10, 14);
var square = new Square(5, 5);
console.dir(rectangle);
console.dir(square);