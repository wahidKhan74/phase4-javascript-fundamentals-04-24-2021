//js map : is  a key value pair collection and it uses key of various type.
let userMap = new Map();

// add data into map
userMap.set("id", 10001);    // key is string & value is number.
userMap.set(1,"John Smith"); // key is number & value string.
userMap.set(null,"John") ;   // key is null & value is string.
userMap.set(true,"Married"); // key is boolean value is string
// userMap.set(true,"UnMarried"); // overried the value

console.log(userMap);

// acess data from map
console.log(userMap.get("id"));
console.log(userMap.get(1));
console.log(userMap.get(null));
console.log(userMap.get(true));

//get all keys
console.log(userMap.keys());

// get all values
console.log(userMap.values());

//delete a pair from map
// userMap.delete("id");

// clear
// userMap.clear();


// iteration over map
for(let key of userMap.keys()) {
    console.log(` Key : ${key} & value ${userMap.get(key)}`);
}


