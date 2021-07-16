function addNumber(num1, num2){
    console.log(arguments);
    return num1 + num2;
}
var result = addNumber(2, 7, 8);
console.log('total:', result);

console.log('======');

function addNumber(num1, num2){
    console.log(arguments[1]);
    return num1 + num2;
}
var result = addNumber(5, 2, 7);
console.log('total:', result);

console.log('======');

function addNumber(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result = addNumber(5, 2, 7, 8);
console.log('total:', result);

console.log('======');
