class Person {

    firstName:string;
    lastName:string;
    age:number;
    isMarried:boolean;

    constructor(firstName:string,lastName:string,age:number,isMarried:boolean){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
        this.isMarried = isMarried;
    }
}
let person = new Person("john","david",30,true);

console.log(person.firstName +" " +person.lastName);
console.log(person.age +" " +person.isMarried);
