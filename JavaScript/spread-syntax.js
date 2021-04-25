// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in same places.
let numbers  = [10,20,30,40,50];

function sum(x,y,z,p,q) {
    return x+y+z+p+q;
}

var response = sum(...numbers);
console.log(response);
