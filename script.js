

function validate() {
  let MyName = document.MyForm.MyName;
  let MyEmail = document.MyForm.MyEmail;
  let MyPassword = document.MyForm.MyPassword;
  let ConfirmPassword = document.MyForm.ConfirmPassword;

  if (MyName.value.length <= 0) {
    document.getElementById("username").innerHTML = " ** Please Fill the name";
    MyName.focus();
    return false;
  }

  if (MyEmail.value.length <= 0) {
    document.getElementById("useremail").innerHTML = " ** Please Fill the email";
    MyEmail.focus();
    return false;
  }
  if (MyPassword.value.length <= 0) {
    document.getElementById("userpassword").innerHTML = " ** Please Fill the password";
    MyPassword.focus();
    return false;
  }
  if (ConfirmPassword.value.length <= 0) {
    document.getElementById("userconfirmpassword").innerHTML = " ** Please Fill the Confirm password";
    ConfirmPassword.focus();
    return false;
  }
  if (MyPassword.value.length != ConfirmPassword.value.length) {
    document.getElementById("userconfirmpassword").innerHTML = "password do not match";
    ConfirmPassword.focus();
    return false;
  }
}


  function myFunction() {
  let MyPassword = document.getElementById("MyPassword");
  if (MyPassword.type === "password") {
        MyPassword.type = "text";
    document.getElementById("hide-icon").style.display = "inline-block";
    document.getElementById("show-icon").style.display = "none";
  } else {
    MyPassword.type = "password";
    document.getElementById("hide-icon").style.display = "none";
    document.getElementById("show-icon").style.display = "inline-block";
  }
}

function myFunction2() {
  let ConfirmPassword = document.getElementById("ConfirmPassword");
  if (ConfirmPassword.type === "password") {
    ConfirmPassword.type = "text";
    document.getElementById("hide-icon2").style.display = "inline-block";
    document.getElementById("show-icon2").style.display = "none";
  } else {
    ConfirmPassword.type = "password";
    document.getElementById("hide-icon2").style.display = "none";
    document.getElementById("show-icon2").style.display = "inline-block";
  }
}
