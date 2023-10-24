let title = document.querySelector('#title');
let login = 1;

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