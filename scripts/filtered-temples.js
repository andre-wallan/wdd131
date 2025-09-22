// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53512,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city/400x250/salt-lake-city-temple.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 15350,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple.jpg"
  }
];

// Function to create a temple card element
function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.style.opacity = 0; // start hidden for fade-in animation

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    card.appendChild(img);

    const caption = document.createElement('figcaption');
    caption.innerHTML = `
        <strong>${temple.templeName}</strong><br>
        Location: ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area.toLocaleString()} sq ft
    `;
    card.appendChild(caption);

    return card;
}

// Display temples with fade-in effect
function displayTemples(templeArray) {
    const container = document.getElementById('templeContainer');

    // Fade-out current cards
    const existingCards = Array.from(container.children);
    existingCards.forEach(card => {
        card.style.transition = 'opacity 0.3s';
        card.style.opacity = 0;
    });

    setTimeout(() => {
        container.innerHTML = '';
        templeArray.forEach(temple => {
            const card = createTempleCard(temple);
            container.appendChild(card);
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s';
                card.style.opacity = 1; // fade in
            }, 50);
        });
    }, 300); // wait for fade-out to finish
}

// Initial display
displayTemples(temples);

// Navigation filter with animation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.textContent.toLowerCase();
        let filteredTemples;

        switch(filter) {
            case 'old':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);
    });
});

// Footer year and last modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const menuitems = document.getElementById('menuitems');

hamburger.addEventListener('click', () => {
    menuitems.classList.toggle('open');
});
