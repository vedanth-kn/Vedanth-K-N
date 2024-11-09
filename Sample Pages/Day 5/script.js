// Local
// Global
// block {}
// var is use in local variable
// let and const is used in block 

console.log("This is JavaScript")
var name="GMIT"

function f1() {
    console.log("f1 is " + name)
}

function f2() {
    console.log("f2 is " + name)
}

f1();
f2();

function fnAdd(a, b) {
    console.log(a+"+"+b+"="+(a+b))
    console.log(a,'+',b,"=",a+parseInt(b))

}

fnAdd(5, 2)
fnAdd(5)
fnAdd(6,'2')
// console.log(result)

{
    var a =10;
    console.log(a)
    let b = 20;
    console.log(b)
    const c = 30;
    console.log(c)
}

console.log(a)


var username = "user"
var password = "1100"

function login() {
    console.log("Called")
    let uname = document.getElementById("Username").value;
    let pass = document.getElementById("password").value;
    console.log(uname)
    if (uname === "user" && pass === "1100") {
        console.log("Login Success")   
    }
    else {
        console.log("Login Falid")
    }
}

function singup() {
    console.log("Called")
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById("Email").value
    let pass = document.getElementById("password").value;
    let confpass = document.getElementById("confpass").value;
    console.log(fname)
    console.log(email)
    
    let validate = validateFields(fname)
    console.log(validate)

    if (pass === confpass) {
        console.log("Sing UP Success")   
    }
    else {
        console.log("Password not matching")
    }
}

function validateFields(inputValue) {
    console.log(inputValue.length)
    // if(inputValue.length >= 5) {
    //     console.log("Valid")
    //     return true
    // }
    // else {
    //     console.log("Invalid")
    //     return false
    // }

    return inputValue.length >=5 ? "valid" : "invalid"
}


// MERN STACK
//      MongoDB
//      ExpressJS
//     
//      NodeJS

// MEAN STACK
//      MongoDB
//      ExpressJS
//      AngularJS
//      NodeJS
