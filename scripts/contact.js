const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

// Retrieve existing messages from localStorage or start with empty array
let messages = JSON.parse(localStorage.getItem('messages')) || [];

// Function to save message to array and localStorage
function saveMessage(formData) {
  messages.push(formData); // add to array
  localStorage.setItem('messages', JSON.stringify(messages)); // save to localStorage
}

// Function to validate email
function isValidEmail(email) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return emailPattern.test(email);
}

// Event listener for form submission
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Create object with form data
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    subject: document.getElementById('subject').value.trim(),
    message: document.getElementById('message').value.trim()
  };

  // Validation
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    formFeedback.textContent = "Please fill in all required fields.";
    formFeedback.style.color = "red";
    return;
  }

  if (!isValidEmail(formData.email)) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.style.color = "red";
    return;
  }

  // Save the message
  saveMessage(formData);

  // Success feedback
  formFeedback.textContent = `Thank you, ${formData.name}! Your message has been sent.`;
  formFeedback.style.color = "green";

  // Clear form
  contactForm.reset();
});
