//
"use strict";

var namee = document.getElementById("nameOne");
var email = document.getElementById("emailOne");
var phone = document.getElementById("phoneOne");
var password = document.getElementById("passwordOne");
var cpassword = document.getElementById("cpasswordOne");
var span = document.getElementsByTagName("span");

namee.onkeydown = function () {
  const regxn = /^[A-Za-z][a-z\s]*$/;
  if (regxn.test(namee.value)) {
    // span[0].innerText = "Your name is valid";
    namee.style.border = "4px solid green";
    span[0].style.display = "none";
  } else {
    span[0].innerText = "Your name is Invalid";
    span[0].style.color = "red";
    namee.style.border = "3px solid red";
  }
};

email.onkeydown = function () {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
  if (regex.test(email.value)) {
    email.style.border = "4px solid green";
    span[1].style.display = "none";
    // span[1].innerText = "Your email is valid";
    // span[1].style.color = "green";
  } else {
    span[1].innerText = "Your email is Invalid";
    span[1].style.color = "red";
    email.style.border = "3px solid red";
  }
};

phone.onkeydown = function () {
  const regp = /^[0-9]{9}$/;

  if (regp.test(phone.value)) {
    phone.style.border = "4px solid green";
    span[2].style.display = "none";
    // span[2].innerText = "Your phone is valid";
    // span[2].style.color = "green";
  } else {
    span[2].innerText = "Your phone is Invalid";
    span[2].style.color = "red";
    phone.style.border = "3px solid red";
  }
};

password.onkeydown = function () {
  const regpass =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/;
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  // /^[a-zA-Z0-9]{8,}$/;
  // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/;
  // /^[a-zA-Z0-9]{8,}$/
  // ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$

  if (regpass.test(password.value)) {
    // span[3].innerText = "Your password is valid";
    password.style.border = "4px solid green";
    span[3].style.display = "none";
  } else {
    span[3].innerText = "Your password is Invalid";
    span[3].style.color = "red";
    password.style.border = "3px solid red";
  }
};

cpassword.onchange = function () {
  if (cpasswordOne.value == passwordOne.value) {
    cpassword.style.border = "4px solid green";
    span[4].style.display = "none";
  } else {
    span[4].innerText = "Please make sure your passwords match. ";
    span[4].style.color = "red";
    cpassword.style.border = "3px solid red";
  }
};

document.querySelector("#regBtn").addEventListener("click", function (event) {
  event.preventDefault();
  if (
    namee.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    password.value == "" ||
    cpassword.value == "" ||
    cpassword.value != password.value
  ) {
    span[5].innerText = "Please fill in a valid value for all required fields.";
    span[5].style.color = "red";
  } else {
    document.getElementById("signSpan").innerHTML =
      "You have successfully registered";
    span[5].style.color = "green";

    var FULLNAME, EMAIL, PHONE, PASSWORD;
    FULLNAME = namee.value;
    EMAIL = email.value;
    PHONE = phone.value;
    PASSWORD = cpassword.value;

    localStorage.setItem("FULLNAME", FULLNAME);
    localStorage.setItem("EMAIL", EMAIL);
    localStorage.setItem("PHONE", PHONE);
    localStorage.setItem("PASSWORD", PASSWORD);
  }
});

// function saveData() {
//   let FULLNAME, EMAIL, PHONE, PASSWORD;
//   USERNAME = namee.value;
//   EMAIL = email.value;
//   PHONE = phone.value;
//   PASSWORD = cpassword.value;

//   localStorage.setItem("USERNAME", FULLNAME);
//   localStorage.setItem("EMAIL", EMAIL);
//   localStorage.setItem("PHONE", PHONE);
//   localStorage.setItem("PASSWORD", PASSWORD);
// }

// document.querySelector("#regBtn").addEventListener("click", function (event) {
//   event.preventDefault();
//   if (namee == " ") {
//     span[0].innerText = "Name is Invalid";
//     span[0].style.color = "red";
//   } else {
//     document.getElementById("lb").innerHTML =
//       "You have successfully registered";
//     span[5].style.color = "green";
//   }
// });

// return function myFun() {
//   var click = (document.getElementById("myfun").innerHTML =
//     "You have successfully registered !");
// }

// function checkName() {
//   var name = document.getElementById("nameOne");

//   var regEx = /^[a-z][a-z\s]*$/;
//   if (name.value.match(regEx)) {
//     document.getElementById("name_error").style.display = "inline";
//     document.getElementById("nameOne").style.border = "2px solid red";
//     email.focus;
//     return false;
//   } else {
//     document.getElementById("nameOne").style.border = "2px solid green";
//   }
// }

// function checkPhone() {
//   var phone = document.getElementById("phoneOne").value;

//   if (phone.length > 0 && phone.length != 10) {
//     document.getElementById("phone_error").style.display = "inline";
//     document.getElementById("phone_error").style.border = "2px solid red";

//     phone.focus;
//     return false;
//   } else {
//     document.getElementById("phoneOne").style.border = "2px solid green";
//   }
// }

// function checkEmail() {
//   var email = document.getElementById("emailOne");
//   var filter =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (!filter.test(email.value)) {
//     document.getElementById("email_error").style.display = "touchB";
//     document.getElementById("emailOne").style.border = "2px solid red";

//     email.focus;
//     return false;
//   } else {
//     document.getElementById("emailOne").style.border = "2px solid green";
//   }
// }

// return function myFun() {
//   var click = (document.getElementById("myfun").innerHTML =
//     "You have successfully registered !");
// }

//   if (name.value == "" && name.value.length < 3) {
//     name.style.border = "1px solid red";
//     name.focus();
//     return false;

//     name.style.border = "1px solid red";
//     //     name_error.style.display = "block";
//     //     Name.focus();
//     //     return false;
//   }

//   if (email.value == "" && email.value.length < 6) {
//     window.alert("please enter your email.");
//     email.focus();
//     return false;
//   }
//   if (phone.value == "" && phone.value.length > 10) {
//     window.alert("please enter your phone.");
//     phone.focus();
//     return false;
//   }
//   if (textArea.value == "" && textArea.value.length < 10) {
//     window.alert("please enter your address.");
//     textArea.focus();
//     return false;
//   }
//   if (password.value == "") {
//     window.alert("please enter your password.");
//     password.focus();
//     return false;
//   }
//   if (cpassword.value == "") {
//     window.alert("please enter your confirm passowrd.");
//     cpassword.focus();
//     return false;
//   }

//   return true;
// }

/// validation code for Inputs
// const nameText = document.querySelector(".Name").value;
// const email = document.querySelector(".Email").value;
// var phone = document.querySelector(".Phone").value;
// var textarea = document.querySelector(".Textarea").value;
// var password = document.querySelector(".Password").value;
// var cpassword = document.querySelector(".CPassword").value;

// nameText.addEventListener("nameOne", name_Verify);
// email.addEventListener("emailOne", email_Verify);
// phone.addEventListener("emailOne", email_Verify);
// textarea.addEventListener("emailOne", email_Verify);
// password.addEventListener("emailOne", email_Verify);
// cpassword.addEventListener("emailOne", email_Verify);

// function validation() {
//   if (nameText.value.length < 4) {
//     nameText.style.border = "1px solid red";
//     name_error.style.display = "block";
//     Name.focus();
//     return false;
//   }
//   if (email.value.length < 6) {
//     email.style.border = "1px solid red";
//     email_error.style.display = "block";
//     password.focus();
//     return false;
//   }
// }
// function name_Verify() {
//   if (nameText.value.length >= 4) {
//     Name.style.border = "2px solid green";
//     email_error.style.display = "none";
//     block;

//     return true;
//   }
// }
// function email_Verify() {
//   if (email.value.length > 5) {
//     email.style.border = "2px solid green";
//     email_error.style.display = "none";
//     return true;
//
