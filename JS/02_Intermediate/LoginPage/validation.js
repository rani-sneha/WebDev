const form =document.getElementById('form');
const firstnameInput = document.getElementById('firstname-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('repeat-password-input');
form.addEventListener('submit', function(e) {
  form.querySelectorAll('.incorrect').forEach(el => el.classList.remove('incorrect'));

  let errors = []

  if(firstnameInput){
    errors=getSignupFormErrors(firstnameInput.value, emailInput.value, passwordInput.value, confirmPasswordInput.value);
  }
  else{
    errors=getLoginFormErrors(emailInput.value, passwordInput.value);
  }

  if(errors.length >0){
    e.preventDefault();
  }
});

function getSignupFormErrors(firstname, email, password, confirmPassword){
  let errors = []
  if(!firstname || firstname.trim().length ===0){
    errors.push({field: 'firstname', message: 'First name is required.'});
    firstnameInput.parentElement.classList.add('incorrect');
  }
  if(!email || email.trim().length ===0){
    errors.push({field: 'email', message: 'Email is required.'});
    emailInput.parentElement.classList.add('incorrect');
  } 
  if(!password || password.length <6){
    errors.push({field: 'password', message: 'Password must be at least 6 characters long.'});
    passwordInput.parentElement.classList.add('incorrect');
  } 
  if(password !== confirmPassword){
    errors.push({field: 'confirmPassword', message: 'Passwords do not match.'});
    confirmPasswordInput.parentElement.classList.add('incorrect');
  }
  return errors;
}

function getLoginFormErrors(email, password){
  let errors = []
  if(!email || email.trim().length ===0){
    errors.push({field: 'email', message: 'Email is required.'});
    emailInput.parentElement.classList.add('incorrect');
  }
  if(!password || password.length <6){
    errors.push({field: 'password', message: 'Password must be at least 6 characters long.'});
    passwordInput.parentElement.classList.add('incorrect');
  }
  return errors;
}