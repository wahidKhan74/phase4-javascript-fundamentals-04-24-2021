// var :  var keyword has function level scopr
// let : let keyword has block level scope
// const : const keyword has block level scope

function display() {
    var flage = true;
    if(flage) {
        var item1 = "Nike Shoes";  // exist in function
        let item2 = "Boat Speakers"; // exist in a block
        const item3 = "Iphone 12 pro";  // exist in a block

        item2 ="One plus Nord.";  // reassignment is valid
        item3 = "Iphone 11 max"; // reassignment is not valid
        
        console.log("Item 1: ", item1);
        console.log("Item 2: ", item2);
        console.log("Item 3: ", item3);
    }
    console.log("========");
    
    console.log("Item 1: ", item1);
    // console.log("Item 2: ", item2);  // Uncaught ReferenceError: item2 is not defined
    // console.log("Item 3: ", item3);  // // Uncaught ReferenceError: item3 is not defined

    
}

display();