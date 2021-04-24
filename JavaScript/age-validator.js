var age  = 5;

var ageValidator = function (age) {
    if(age > 18) {
        console.log("YOur age is valid age !");
        return true;
    }else{
        console.log("YOur age is not a valid age !");
        return false;
    }
}

// console.log(ageValidator);

var loginUser =  (response ) => {
    if(response){
        console.log("Welcome to facebook !");
    } else{
        console.log("Better luck next time.");
    }
}

var res =  ageValidator(age);
loginUser(res);