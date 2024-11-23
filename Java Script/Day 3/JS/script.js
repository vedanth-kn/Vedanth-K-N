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

    // First Name validation
    document.getElementById("fname-error-required").style.display = fname ? "none" : "block";
    document.getElementById("fname-error-length").style.display = (fname && fname.length < 5) ? "block" : "none";
    
    // Last Name validation
    document.getElementById("lname-error-required").style.display = lname ? "none" : "block";
    
    // Email validation
    document.getElementById("email-error-required").style.display = email ? "none" : "block";
    document.getElementById("email-error-format").style.display = (email && !EmailPattern.test(email)) ? "block" : "none";
    
    // Password validation
    document.getElementById("password-error-required").style.display = password ? "none" : "block";
    document.getElementById("password-error-length").style.display = (password && password.length < 8) ? "block" : "none";
    document.getElementById("password-error-strong").style.display = (password && !PasswordPattern.test(password)) ? "block" : "none";

    // Confirm Password validation
    document.getElementById("confpassword-error-required").style.display = confpass ? "none" : "block";
    document.getElementById("confpassword-error-match").style.display = (confpass && password !== confpass) ? "block" : "none";
}

function   fnValidateLoginForm(e) {
    e.preventDefault();
    let formData = e.target;
    let uname = formData.username.value;
    let password = formData.password.value;

    // User Name validation
    document.getElementById("uname-error-required").style.display = uname ? "none" : "block";

    // Password validation
    document.getElementById("password-error-required").style.display = password ? "none" : "block";
}