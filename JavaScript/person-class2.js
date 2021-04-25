class Person {

    // properties :- data members 
    // constructor delecration with properties initalization
    constructor(firstName,lastName,age,gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;

        this.showData = function () {
            console.log("Hello , "+this.firstName +" "+ this.lastName);
        }
    }

    //methods : logic : memmber function
    calcRetirement(){
        if(this.age > 40) {
            return "You are retired !";
        }
        return `You have ${40-this.age} more year to get retired !`
    }

    // es6  -> getter & setter as properties
    get _firstName(){
        return this.firstName;
    }

    get _lastName(){
        return this.lastName;
    }

    set _firstName(_firstName){
        this.firstName = _firstName;
    }

    set _lastName(_lastName){
        this.lastName = _lastName;
    }
}

const person = new Person("John","Doe",29,"male");
console.log(person);

person.showData();
console.log(person.calcRetirement());

//setter as propery 
person._firstName = "Mike";
person._lastName = "William";

//getter as property
console.log(person._firstName);
console.log(person._lastName);

