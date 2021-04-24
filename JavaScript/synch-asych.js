// callback  ->  When we pass a function as an argument to another function.

// synchronous program
console.log("Satement 1");
console.log("Satement 2");
console.log("Satement 3");
console.log("Satement 4");
console.log("Satement 5");

console.log("==================");

// asynchronous program

console.log("Satement 1");
console.log("Satement 2");
// blocking code.
var showData = function () {
    console.log("Satement 3");
}
setTimeout(showData, 3000);

console.log("Satement 4");
console.log("Satement 5");
