function validateEmail() {
  var email = document.getElementById("email").value;
  var regex = /^\S+@\S+\.\S+$/; // regular expression for email validation

  if (regex.test(email)) {
    // alert("Valid email");
    window.location.assign("login.html");
    // window.location.href = "www.google.com";
  } else {
    alert("Invalid email");
  }
}