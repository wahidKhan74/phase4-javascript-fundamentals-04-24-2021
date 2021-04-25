var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, isMarried) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMarried = isMarried;
    }
    return Person;
}());
var person = new Person("john", "david", 30, true);
console.log(person.firstName + " " + person.lastName);
console.log(person.age + " " + person.isMarried);
