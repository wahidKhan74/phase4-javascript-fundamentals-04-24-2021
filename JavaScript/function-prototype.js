//Account constructor
function Account(id,name,balance,email) {
    this.id= id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}

// add new property state & city in prototpye
Account.prototype.state = "New York";
Account.prototype.city = "NY";

// add methods within prototype
Account.prototype.showBlance = function showBlance() {
    console.log(this.balance);
}
Account.prototype.depositAmt = function depositAmt(amount) {
   return this.balance += amount ;
}

// create object
var account = new Account(1001,"John Doe",387273.23,"john.doe@gmail.com");
console.log(account);
console.log(account.city);
account.showBlance();
var response = account.depositAmt(10000);
console.log(response);



var account2 = new Account(1002,"Marry Doe",187273.23,"marry.doe@gmail.com");
console.log(account2);
account2.showBlance();