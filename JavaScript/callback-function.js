// callback  ->  When we pass a function as an argument to another function.

var x  = function() {
    console.log(" I am called from another function .");
}

var y  = function (callback) {
    console.log("I am processing function .");
    // callback function call
    callback();
}

// x-> x is a cllaback function
y(x);
