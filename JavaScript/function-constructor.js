// js object
//  var account1 =  {
//      id : 10001,
//      name : "Mike David",
//      balance : 823763.23,
//      email : 'mike.david@gmail.com'
//  }

//  console.log(account);
//  console.log(account.name);
 
// constructor  : it is a fuction which allow to create dynamic objects from same blueprint

function Account(id,name,balance,email) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}

var account1 = new Account(1001,"John Doe",27273.234, "john.doe@gmail.com");
console.log(account1);
console.log(account1.name);
console.log(account1.balance);

var account2 = new Account(1002,"Marry Doe",17273.234, "marry.doe@gmail.com");