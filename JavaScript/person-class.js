class Person {

    // properties :- data members 
    firstName;
    lastName;
    age;
    gender;

    // constructor
    constructor(firstName,lastName,age,gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    //methods : logic : memmber functions
    showData() {
        console.log("Hello , "+this.firstName +" "+ this.lastName);
    }

    calcRetirement(){
        if(this.age > 40) {
            return "You are retired !";
        }
        return `You have ${40-this.age} more year to get retired !`
    }

    getfirstName(){
        return this.firstName;
    }

    getlastName(){
        return this.lastName;
    }

    setfirstName(firstName){
        this.firstName = firstName;
    }

    setlastName(lastName){
        this.lastName = lastName;
    }
}

const person = new Person("John","Doe",29,"male");
console.log(person);

person.showData();
console.log(person.calcRetirement());
console.log(person.getfirstName());
console.log(person.getlastName());

