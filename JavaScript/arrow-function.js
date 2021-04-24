var getProduct =  () => {
    console.log("One Product !");
    return  { id : 1000, name : "Lenvo Laptop xyz series" , price:23783 }
}

// one linner arrow  function 
var getLaptop =  () => console.log("One Laptop !");

// one lineer arrow  function with return 
var getTV =  () => { return "One TV !" };

// one lineer arrow  function with return 
var getMike =  () =>  "One Mike !" ;


getLaptop();
var response  = getProduct();

var tv = getTV();
console.log(tv);

var mike = getMike();
console.log(mike);
