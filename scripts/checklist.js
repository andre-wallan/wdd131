const checklist = document.querySelectorAll('#checklist input[type="checkbox"]');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// Function to update progress bar
function updateProgress() {
  const total = checklist.length;
  const checked = Array.from(checklist).filter(item => item.checked).length;
  const percent = Math.round((checked / total) * 100);
  progressBar.style.width = percent + '%';
  progressText.textContent = `${percent}% Complete`;
}

// Load saved checklist state
window.addEventListener('DOMContentLoaded', () => {
  checklist.forEach((item, index) => {
    const saved = localStorage.getItem('checklist_' + index);
    if (saved === 'true') item.checked = true;
    item.addEventListener('change', updateProgress);
  });
  updateProgress();
});

// Save checklist state
saveBtn.addEventListener('click', () => {
  checklist.forEach((item, index) => {
    localStorage.setItem('checklist_' + index, item.checked);
  });
  alert('Progress saved!');
});

// Reset checklist state
resetBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to reset your progress?')) {
    checklist.forEach((item, index) => {
      item.checked = false;
      localStorage.removeItem('checklist_' + index);
    });
    updateProgress();
  }
});
