
//------------------ form ----------------------------

var errorName = document.getElementById("errorName");
var errorEmail = document.getElementById("errorEmail");
var errorPass = document.getElementById("errorPass");
var errorMessage = document.getElementById("errorMessage");
var errorSubmit = document.getElementById("errorSubmit");


//------------------------ validate Name --------------------------------

function nameValidation() {
  let inputName = document.getElementById("userName").value;

  if (inputName.length < 5) {
    errorName.innerHTML = "Name not valid";
    return false;
  }
  if (!inputName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    errorName.innerHTML = "Name not valid";
    return false;
  }

  errorName.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}
inputName.onkeydown = nameValidation;


//--------------------------- validate Email ----------------------------


function emailValidation() {
  var inputEmail = document.getElementById("userEmail").value;
  var regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (inputEmail.length == 0) {
    errorEmail.innerHTML = "Email not valid";
    return false;
  }
  if (!inputEmail.match(regEmail)) {
    errorEmail.innerHTML = "Email not valid";
    return false;
  }

  errorEmail.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}


//----------------------------- validate Password -------------------


function passwordValidation() {
  var inputPassword = document.getElementById("userpass").value;

  if (inputPassword.length < 9) {
    errorPass.innerHTML = "Password not valid";
    return false;
  }

  errorPass.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}



//------------------------------- validate Message ----------------------

function messageValidation() {
  var message = document.getElementById("message").value;

  if (message.length < 20) {
    errorMessage.innerHTML = "must be bigger than 20 character";
    return false;
  }

  errorMessage.innerHTML = `<i class="fas fa-check-circle"></i>`;
  return true;
}


//-------------------------------- validate Submit -----------------------


function validtion() {
  if (
    !nameValidation() ||
    !emailValidation() ||
    !passwordValidation() ||
    !messageValidation()
  ) {
    errorSubmit.style.display = "block";

    errorSubmit.innerHTML = " chech Error";
    setTimeout(function () {
      errorSubmit.style.display = "none";
    }, 4000);
    return false;
  }
}


//----------------------------------------------------------------------

