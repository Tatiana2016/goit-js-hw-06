const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = this.elements.email.value;
  const password = this.elements.password.value;

  if (!email || !password) {
    alert('Please fill in all fields');
  } else {
    const userData = {
      email,
      password
    };
    console.log(userData);
    this.reset();
  }
});
