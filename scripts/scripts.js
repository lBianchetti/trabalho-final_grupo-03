function verifyInputs() {
  let uservalue = document.querySelector('#user').value;
  let passwordvalue = document.querySelector('#password').value;

  if (uservalue !== '' && passwordvalue !== '') {
    window.location.href = 'main.html';
  }

  if (uservalue == '') {
    user.style.borderColor = 'red'
  }
  else {
    user.style.borderColor = 'rgba(255, 255, 255, 0.7)'
  }
  if (passwordvalue == '') {
    password.style.borderColor = 'red'
  }

  else {
    password.style.borderColor = 'rgba(255, 255, 255, 0.7)'
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
    signup.classList.add('hide')
  }

  else {
    form.classList.add('hide');
    signup.classList.remove('hide');
  }
}

