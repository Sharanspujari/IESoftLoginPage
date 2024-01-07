let loginbtn = document.getElementById("login-btn");
let registerbtn = document.getElementById("register-btn");
let registerForm = document.getElementById("register-form");
let loginForm = document.getElementById("login-form");

function loginFun() {
  registerbtn.style.background = "none";
  registerbtn.style.color = "rgb(6, 255, 255";
  registerForm.style.display = "none";
  loginbtn.style.background = "rgb(6, 255, 255";
  loginbtn.style.color = "#000000";
  loginForm.style.display = "block";
}

function registerFun() {
  loginbtn.style.background = "none";
  registerbtn.style.color = "#000000";
  registerbtn.style.background = "rgb(6, 255, 255";
  registerbtn.style.borderRadius = "30px";
  loginbtn.style.color = "rgb(6, 255, 255";
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

let textData = document.getElementById("text");
let uppercase = textData.innerText.toUpperCase();
textData.innerText = uppercase;
