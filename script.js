const form = document.querySelector('.signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! You will be notified at launch.');
  form.reset();
});
