function verifyInputs() {
  let uservalue = document.querySelector('#user').value;
  let passwordvalue = document.querySelector('#password').value;

  if (uservalue == localStorage.getItem("Login") && passwordvalue == localStorage.getItem("Password")) {
    window.location.href = 'main.html';
  }

  if (localStorage.getItem("Login") == null && localStorage.getItem("Password") == null) {
    window.alert("Você ainda não possui uma conta.");
    document.querySelector('#user').value = '';
    document.querySelector('#password').value = '';
  }

  if (uservalue == '' || uservalue !== localStorage.getItem("Login")) {
    user.style.borderColor = 'red'
  }
  else {
    user.style.borderColor = 'rgba(255, 255, 255, 0.7)'
  }
  if (passwordvalue == '' || passwordvalue !== localStorage.getItem("Password")) {
    password.style.borderColor = 'red'
  }

  else {
    password.style.borderColor = 'rgba(255, 255, 255, 0.7)'
  }
}

function verifyInputsSign() {
  var username = document.querySelector('#user_signup').value;
  var passwordcreate = document.querySelector('#password_signup').value;
  var passwordcheck = document.querySelector('#password_verify').value;

  if (username !== '' && passwordcreate !== '' && passwordcheck == passwordcreate) {
    var login = localStorage.setItem("Login", username);
    var pass = localStorage.setItem("Password", passwordcheck);
    let form = document.querySelector('.input_login');
    let signup = document.querySelector('.input_signup')
    document.querySelector('#user_signup').value = '';
    document.querySelector('#password_signup').value = '';
    document.querySelector('#password_verify').value = '';

    window.alert('Conta criada com sucesso.');
    signup.classList.add('hide');
    form.classList.remove('hide');
  }

  if (username !== '' && passwordcheck !== passwordcreate) {
    window.alert('As senhas não são iguais.')
    document.querySelector('#password_verify').value = '';
  }

  if (username == '' || passwordcreate == '') {
    window.alert('Preencha todos os campos')
  }

  if (username == '') {
    user_signup.style.borderColor = 'red'
  }
  else {
    user_signup.style.borderColor = 'rgba(255, 255, 255, 0.7)'
  }
  if (passwordcreate == '') {
    password_signup.style.borderColor = 'red'
  }

  else {
    password_signup.style.borderColor = 'rgba(255, 255, 255, 0.7)'
  }
  if (passwordcheck == '') {
    password_verify.style.borderColor = 'red'
  }

  else {
    password_verify.style.borderColor = 'rgba(255, 255, 255, 0.7)'
  }
}

function showPassword() {
  let passwordarea = document.querySelector('#password');
  var eyeIcon = document.querySelector('.eye-icon');

  if (passwordarea.type === 'password') {
    passwordarea.type = 'text';
    eyeIcon.classList.remove('bx-hide');
            eyeIcon.classList.add('bx-show');
  } else {
    passwordarea.type = 'password';
    eyeIcon.classList.remove('bx-show');
            eyeIcon.classList.add('bx-hide');
  }
}

function register() {
  let form = document.querySelector('.input_login');
  let signup = document.querySelector('.input_signup')
  
  if (form.classList.contains('hide')) {
    form.classList.remove('hide');
    signup.classList.add('hide');
    document.querySelector('#user').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#user_signup').value = '';
    document.querySelector('#password_signup').value = '';
    document.querySelector('#password_verify').value = '';
  }

  else {
    form.classList.add('hide');
    signup.classList.remove('hide');
  }
}

function forgotpass() {
  let forgotuser = localStorage.getItem("Login");
  let forgotpassword = localStorage.getItem("Password");

    if (localStorage.getItem("Login") == null && localStorage.getItem("Password") == null) {
      window.alert("Você ainda não possui uma conta.");
    }
    else {
      window.alert('Usuário: ' + forgotuser + '\nSenha: ' + forgotpassword);
    }
  }