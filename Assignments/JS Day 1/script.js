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
