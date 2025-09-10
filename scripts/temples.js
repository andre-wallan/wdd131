// Footer year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const menuitems = document.getElementById('menuitems');

hamburger.addEventListener('click', () => {
    menuitems.classList.toggle('open');
});
