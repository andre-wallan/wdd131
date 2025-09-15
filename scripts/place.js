/**
 * JavaScript for Norway Country Page
 * Handles wind chill calculation, footer updates, and dynamic content
 */

// Static weather data (as required by assignment)
const TEMPERATURE = 5; // °C
const WIND_SPEED = 8;  // km/h

/**
 * Calculate wind chill factor using metric units (°C and km/h)
 * Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
 * Where T = temperature in °C, V = wind speed in km/h
 * 
 * @param {number} temperature - Temperature in Celsius
 * @param {number} windSpeed - Wind speed in km/h
 * @returns {number} - Wind chill factor rounded to nearest integer
 */
function calculateWindChill(temperature, windSpeed) {
    // One-line calculation as required by assignment
    return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

/**
 * Alternative function for Imperial units (°F and mph)
 * Formula: 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
 * Where T = temperature in °F, V = wind speed in mph
 * 
 * @param {number} temperature - Temperature in Fahrenheit
 * @param {number} windSpeed - Wind speed in mph
 * @returns {number} - Wind chill factor rounded to nearest integer
 */
function calculateWindChillImperial(temperature, windSpeed) {
    return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

/**
 * Display wind chill or "N/A" based on conditions
 * Conditions for viable wind chill calculation:
 * - Metric: Temperature ≤ 10°C AND Wind speed > 4.8 km/h
 * - Imperial: Temperature ≤ 50°F AND Wind speed > 3 mph
 */
function displayWindChill() {
    const windChillElement = document.getElementById('windchill');
    
    if (!windChillElement) {
        console.error('Wind chill element not found');
        return;
    }
    
    // Check conditions for viable wind chill calculation (using metric)
    if (TEMPERATURE <= 10 && WIND_SPEED > 4.8) {
        const windChill = calculateWindChill(TEMPERATURE, WIND_SPEED);
        windChillElement.textContent = `${windChill}°C`;
        windChillElement.setAttribute('title', `Wind chill calculated: ${windChill}°C`);
    } else {
        windChillElement.textContent = 'N/A';
        windChillElement.setAttribute('title', 'Wind chill not applicable - conditions not met');
    }
}

/**
 * Update the footer with current year and last modified date
 */
function updateFooter() {
    // Update current year
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    } else {
        console.error('Current year element not found');
    }
    
    // Update last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        // Format the last modified date for better readability
        const lastModified = new Date(document.lastModified);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        lastModifiedElement.textContent = lastModified.toLocaleDateString('en-US', options);
    } else {
        console.error('Last modified element not found');
    }
}

/**
 * Display static weather values in the UI
 */
function displayWeatherData() {
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('wind-speed');
    
    if (temperatureElement) {
        temperatureElement.textContent = `${TEMPERATURE}°C`;
    }
    
    if (windSpeedElement) {
        windSpeedElement.textContent = `${WIND_SPEED} km/h`;
    }
}

/**
 * Add smooth scrolling behavior for any internal links
 */
function initSmoothScrolling() {
    // Select all links that start with #
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add loading animation for images
 */
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Add error handling for images that fail to load
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            this.alt = 'Image failed to load';
        });
    });
}

/**
 * Add intersection observer for fade-in animations
 */
function initScrollAnimations() {
    // Check if browser supports IntersectionObserver
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe sections for animation
        const animatedElements = document.querySelectorAll('.about-section, .facts-section, .weather-section, .gallery');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

/**
 * Initialize all functions when DOM is fully loaded
 */
function init() {
    console.log('Initializing Norway page...');
    
    // Core functionality
    displayWindChill();
    updateFooter();
    displayWeatherData();
    
    // Enhancement features
    initSmoothScrolling();
    initImageLoading();
    initScrollAnimations();
    
    console.log('Page initialization complete');
    console.log(`Static weather data: ${TEMPERATURE}°C, ${WIND_SPEED} km/h`);
    console.log(`Wind chill conditions met: ${TEMPERATURE <= 10 && WIND_SPEED > 4.8}`);
}

/**
 * Wait for DOM to be fully loaded before initializing
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded
    init();
}

/**
 * Add window load event for final setup
 */
window.addEventListener('load', function() {
    console.log('All resources finished loading!');
});

// Footer year and last modified
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;