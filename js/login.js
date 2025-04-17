var logInForm = document.getElementById("login-from");
var logInUser = document.getElementById("uNameLogin");
var logInPassword = document.getElementById("uPasswordlogin");
var userRoleLogin = document.getElementById("user-role");
var studentsData = JSON.parse(localStorage.getItem("student"));
var teachersData = JSON.parse(localStorage.getItem("teacher"));
// select error message
var errorEmail = document.getElementById("login-err-email")
var errorPass = document.getElementById("login-err-passwrd")
console.log(errorPass)
var errorRole = document.getElementById("login-err-role")   
var popUp = document.getElementById("pop");



logInForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var loggedUser = {}
    if (userRoleLogin.value === "student") {
        for (var i = 0; i < studentsData.length; i++) {
            if (
                logInUser.value === studentsData[i].email &&
                logInPassword.value === studentsData[i].password
            ) {
                console.log(studentsData[i]);
                loggedUser = studentsData[i]
                localStorage.setItem("loggedStudent",JSON.stringify(loggedUser))
                location.replace("../pages/StudentProfile.html");
                
            }
        }
    } else if (userRoleLogin.value === "teacher") {
        for (var i = 0; i < teachersData.length; i++) {
            if (
                logInUser.value === teachersData[i].email &&
                logInPassword.value === teachersData[i].password
            ) {
                console.log(teachersData[i]);
                loggedUser = teachersData[i]
                localStorage.setItem("loggedTeacher",JSON.stringify(loggedUser))
                location.replace("../pages/InstructorProfile.html");
                
                
            }
        }
    } else {
        console.log("you have to register firs");
        showPopUp()
    }
});

function validateField(inputName, errMsgs, inavlidMsg) {
    inputName.addEventListener("blur", function () {
      if (inputName.value=="") {
        errMsgs.innerHTML = inavlidMsg;
      }
    });
    inputName.addEventListener("focus", function () {
      errMsgs.innerHTML = "";
    });
  }

  validateField(logInUser, errorEmail, "you must write your email")
  validateField(logInPassword, errorPass, "you must write your password")
  validateField(userRoleLogin, errorRole, "you must choose your role")


  function showPopUp() {
    popUp.innerHTML = "you must register first";
    popUp.style.display = "block";
    setTimeout(() => {
      popUp.style.display = "none";
    }, 3000);
  }
  