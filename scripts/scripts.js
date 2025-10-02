// Review submission confirmation with counter
let submissionCount = 0;

document.getElementById("productReviewForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop normal form submit

  submissionCount++;

  const confirmation = document.getElementById("confirmationMessage");
  confirmation.textContent = `✅ Thank you! Your review has been submitted. (Total reviews: ${submissionCount})`;
  confirmation.classList.remove("hidden");

  // Optional: reset the form
  this.reset();
});
