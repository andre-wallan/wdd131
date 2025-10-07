const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation
  if (!name || !email || !subject || !message) {
    formFeedback.textContent = "Please fill in all required fields.";
    formFeedback.style.color = "red";
    return;
  }

  // Simple email format validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.style.color = "red";
    return;
  }

  // Success feedback
  formFeedback.textContent = `Thank you, ${name}! Your message has been sent.`;
  formFeedback.style.color = "green";

  // Clear form fields
  contactForm.reset();
});
