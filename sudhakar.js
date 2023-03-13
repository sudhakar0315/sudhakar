// Get the form and input elements
const form = document.querySelector('form');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');

// Add an event listener to the form on submit
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Get the values of the password and confirm password fields
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  
  // If the passwords don't match, show an error message
  if (passwordValue !== confirmPasswordValue) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error');
    errorMessage.textContent = 'Passwords do not match.';
    form.insertBefore(errorMessage, confirmPasswordInput.nextSibling);
    return;
  }
  
  // Otherwise, submit the form
  form.submit();
});