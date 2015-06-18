var number1 = 0;
var number2 = number1;

number1 += 20;

console.log('number1', number1);
console.log('number2', number2);

var testObj1 = {amount: 0};
var testObj2 = testObj1;

testObj1.amount += 20;

console.log('object1', testObj1);
console.log('object2', testObj2);

/**
 * @returns {number}
 */
function amount()
{
    var result = 0,
        i = 0,
        len = arguments.length;

    while (i < len) {
        if (typeof arguments[i] != "number"){
            throw new Exception("Wrong input!");
        }
        result += arguments[i];
        i++;
    }

    return result;
}

console.log(amount(1, 2)); // 3
console.log(amount(3, 4, 5, 6)); // 18
console.log(amount(50)); // 50
console.log(amount()); // 0


function alertArray(array)
{
    for (var i = 0; i < array.length; i++) {
        alert(array[i]);
    }
}

alertArray([1, 2, 3, 4]);

function forEach(array, action)
{
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log.bind(console));
