function singup() {
    console.log("Called")
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById("Email").value
    let pass = document.getElementById("password").value;
    let confpass = document.getElementById("confpass").value;

    if ((fname.length >= 5) && (lname.length >= 5)) {
        console.log("Success")   
    }
    else {
        console.log("Falide")
    }
}

function fnValidateSignupForm(e) {
    e.preventDefault();
    let formData = e.target;
    let fname = formData.fname.value;
    let lname = formData.lname.value;
    let email = formData.email.value;
    let password = formData.password.value;
    let confpass = formData.confpass.value;

    let EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let PasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!fname) {
        document.getElementsByClassName("error2")[0].style.display="none"
        document.getElementsByClassName("error")[0].style.display="block"
    }
    else if (!(fname.length>4)) {
        document.getElementsByClassName("error")[0].style.display="none"
        document.getElementsByClassName("error2")[0].style.display="block"
    }
    let validateFname = fname.length > 4 ? true : false;
    let validateLname = lname.length > 4 ? true : false;
    let validateEmail = EmailPattern.test(email);


}