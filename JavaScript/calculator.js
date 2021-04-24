// arithmatic calculator  : without callback
// function calculator(num1, num2 , calcType) {

//     if(calcType === "add") {
//         return num1 + num2;
//     } else if(calcType === "sub") {
//         return num1 - num2;
//     } else if(calcType === "mul") {
//         return num1 * num2;
//     } else if(calcType === "div") {
//         return num1 / num2;
//     }
// }
var add = function(num1, num2 ) {
    return num1 + num2;
}

var sub = function(num1, num2 ) {
    return num1 - num2;
}

var mul = function(num1, num2 ) {
    return num1 * num2;
}

var div = function(num1, num2 ) {
    return num1 / num2;
}

var avg = function(num1, num2 ) {
    return (num1 + num2) /2 ;
}

function calculator(num1, num2 , callback) { 
   return callback(num1,num2)
}

var x = 1000;
var y = 200;

var response = calculator (x,y,add);
console.log(`Addition : ${x} + ${y} = ${response}`);

var response1 = calculator (x,y,sub);
console.log(`Substraction : ${x} - ${y} = ${response1}`);

var response2 = calculator (x,y,mul);
console.log(`Multiplication : ${x} * ${y} = ${response2}`);

var response3 = calculator (x,y,avg);
console.log(`Average : ${x} & ${y} = ${response3}`);

