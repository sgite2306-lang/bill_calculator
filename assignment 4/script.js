function validateForm() {

    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var address = document.getElementById("address").value.trim();

    // First Name Validation
    var namePattern = /^[A-Za-z]{5,}$/;
    if (!namePattern.test(fname)) {
        alert("First Name must contain only alphabets and at least 6 characters.");
        return false;
    }

    // Last Name Validation
    if (lname === "") {
        alert("Last Name cannot be empty.");
        return false;
    }

    // Password Validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Email Validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid Email ID (name@domain.com).");
        return false;
    }

    // Mobile Number Validation
    var mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return false;
    }

    // Address Validation
    if (address === "") {
        alert("Address cannot be empty.");
        return false;
    }

    alert("Registration Successful!");
    return true;
}