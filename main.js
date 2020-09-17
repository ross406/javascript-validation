function formSubmit() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('password2').value;
  let name = document.getElementById('name').value;

  let error = document.getElementById('error');
  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');
  let password2Error = document.getElementById('password2Error');

  if (!email && !name && !password && !password2) {
    error.innerHTML = 'Form cannot be submitted empty';
  }

  if (!email || !name || !password || !password2) {
    error.innerHTML = 'Form cannot be submitted empty';

    if (name == '') {
      nameError.innerHTML = 'Name is Not Entered';
    } else if (email == '') {
      emailError.innerHTML = 'Email is Not Entered';
    } else if (password.length != password2.length) {
      passwordError.innerHTML = 'Passwords should match';
    } else if (password.length == 0) {
      passwordError.innerHTML = 'Password is Not Entered';
    } else if (password2.length == 0) {
      password2Error.innerHTML = 'Confirm Password is Not Entered';
    } else if (password.length < 6) {
      error.innerHTML = 'Password should be atleast 6 characters';
    }
  } else {
    error.innerHTML = 'Form submitted';
    emailError.innerHTML = '';
    passwordError.innerHTML = '';
    password2Error.innerHTML = '';
  }
}
