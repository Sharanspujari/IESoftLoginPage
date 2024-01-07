function loginFun() {
  document.getElementById("register-btn").style.background = "none";
  let registerbtn = document.getElementById("register-btn");
  if (registerbtn) {
    document.getElementById("login-btn").style.background =
      "transparent linear-gradient(105deg, #56CCCC 0%, #66B2C9 100%) 0% 0% no-repeat padding-box";
    document.getElementById("login-btn").style.color = "#000000";
    document.getElementById("register-btn").style.color = "#56cbcb";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }
}

function registerFun() {
  document.getElementById("login-btn").style.background = "none";
  let loginbtn = document.getElementById("login-btn");
  if (loginbtn) {
    document.getElementById("register-btn").style.color = "#000000";
    document.getElementById("register-btn").style.background =
      "transparent linear-gradient(105deg, #56cccc 0%, #66b2c9 100%) 0%";
    document.getElementById("register-btn").style.borderRadius = "30px";
    document.getElementById("login-btn").style.color = "#56cbcb";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  }
}

let textData = document.getElementById("text");
let uppercase = textData.innerText.toUpperCase();
textData.innerText = uppercase;
