// function decleration  : in this type functions are hoisted.
// hoisting : js has default  -> varaible / parameters (undefinde)  & function are  hoisted
showMessage();

function showMessage() {
    console.log("Hello, Welcome to 'JavaScript'");
}

// showData();  // Uncaught TypeError: showData is not a function

// function expression  : in this type functions are not hoisted.
// 1. labeled function expression
var showData = function printData(){
    console.log("Hi, Today is a good day !");
}


// 1. anonymous function expression
var showData2 = function (){
    console.log("Hola, Today is a wonderfull day !");
    return "Wonder";
}


// console.log(showData2);

// showMessage();
// showData();
// var response = showData2();
// console.log(response);

// printData();  //  Uncaught ReferenceError