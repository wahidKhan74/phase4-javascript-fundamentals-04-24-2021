// IIFE : Imediately invoked function expression. -> seflr executing function
// syntax
(function(){
    console.log("I am Imediately invoked function expression.")
})();

// self executing anonymous function
(function(){
    let username = "John Smihth";
    console.log(username);
    
    function display(name) {
        console.log("Hello user, ",name);
    }
    display(username);
})();

// IIFE with arrow fn syntax
(()=>{
    console.log("IIFE with arrow function synax.");
})();