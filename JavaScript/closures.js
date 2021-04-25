//closures are nested function in javasscript. 
// which has  access to three scope chain 1) inner variable 2) outer variable 3) global variable
var firstName = "John";   // gloabal varaible.

function fullName(){
    var lastName = "Smith";  // local variable  -> outer variable

    // nested function :  closures function
    function combine() {
        var middleName = "William"; //local varaible -> inner variable.
        return `${firstName} ${middleName} ${lastName}`;
    }
    return combine();
}

var response = fullName();
console.log(response);

