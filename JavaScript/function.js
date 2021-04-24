//function deleration
function functionName() {
    // function body
}

// non parametrised / zero paramter function
function showMessage() {
    console.log("Hello, Welcome to 'JavaScript'");
}

// one paramter function
function greeting(name) {
    console.log('Today is a "wonderfull day" ! ,',name);
}

// multi param function 
function fetchContent(name,age,gender) {
    // template or expression string
    var response  = `Hello, user ${name} you have age ${age} with gender ${gender}`;
    console.log(response);
}

// default parametrised function => es6
function contactUs(name="user",phone="90909090"){
    console.log(`Hi ${name} , you  can reach us on  ${phone}`);
}


// function call
// showMessage();
// greeting("John Smith");
// greeting();
// fetchContent("Tony Stark",40, "male");
// fetchContent();

// if dont pass any argument => default params
contactUs();
// if pass argument => ignore default params
contactUs("John Doe",3030303030);