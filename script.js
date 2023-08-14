var clockIcon = document.getElementById('clock-icon');
var weatherIcon = document.getElementById('weather-icon');
var wellnessIcon = document.getElementById('wellness-icon');
var breakIcon = document.getElementById('break-icon');
var exerciseIcon = document.getElementById('exercise-icon');
var journalIcon = document.getElementById('journal-icon');
var photosIcon = document.getElementById('photos-icon');

// Promjena pozadine

const bodyELemenet = document.body;
const imagePaths = ['Images/background-1.webp', 'Images/background-2.webp', 'Images/background-3.webp', 'Images/background-4.webp', 
'Images/background-5.webp', 'Images/background-6.webp', 'Images/background-7.webp', 'Images/background-8.webp', 
'Images/background-9.webp', 'Images/background-10.webp',];
let currentImageIndex = 0;

photosIcon.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    const imagePath = imagePaths[currentImageIndex];
    bodyELemenet.style.backgroundImage = `url(${imagePath})`;
});

// Prikaz i funkcionalnost sata

const time = document.getElementById('time');
let isClockVisible = false;

clockIcon.addEventListener('click', () => {
    isClockVisible = !isClockVisible;
    time.style.visibility = isClockVisible ? 'visible' : 'hidden';

    if (isClockVisible) {
        const currentTime = new Date().toLocaleTimeString();
        time.textContent = currentTime;
    }
});

// Prikaz weather taba

const weatherTab = document.getElementById('weather-tab');
let isWeatherTabVisible = false;

weatherIcon.addEventListener('click', () => {
    isWeatherTabVisible = !isWeatherTabVisible;
    weatherTab.style.visibility = isWeatherTabVisible ? 'visible' : 'hidden';
});

// Wellness box - prikaz i nestajanje nakon 30 sek

const wellnessTipBox = document.getElementById('wellness-tip-box');
const wellnessTipContent = document.getElementById('wellness-tip-content');

wellnessIcon.addEventListener('click', () => {
    wellnessTipBox.style.visibility = 'visible';

    // Sadrzaj wellness tipa
    wellnessTipContent.textContent = 'Daily wellness tip!';

    setTimeout(() => {
        wellnessTipBox.style.display = 'none';
    }, 30000);
});

/* Break box */

const breakBox = document.getElementById('break-box');
const breakOptions = document.getElementById('break-options');

breakIcon.addEventListener('click', () => {
    breakBox.style.visibility = 'visible';
});

breakOptions.addEventListener('change', () => {
    const selectedOption = breakOptions.value;
    alert(`Selected break: ${selectedOption} minutes.`);
    breakBox.style.visibility = 'hidden';
});

/* Notes container */ 

const notes = document.getElementById('notes-container');
let isNotesVisible = false;
notes.style.visibility = 'hidden';

journalIcon.addEventListener('click', () => {
    isNotesVisible = !isNotesVisible;
    notes.style.visibility = isNotesVisible ? 'visible' : 'hidden';
});

if (notes.style.visibility === 'visible') {
    switch (imagePath) {
        case "1":
            notes.style.backgroundColor = "green";
            break;
        case "2":
            notes.style.backgroundColor = "#2e332f";
            break;
        case "3":
            notes.style.backgroundColor = "#c25d2b";
            break;
        case "4":
            notes.style.backgroundColor = "#1c4b57";
            break;
        case "5":
            notes.style.backgroundColor = "#477480";
            break;
        case "6":
            notes.style.backgroundColor = "#243e45";
            break;
        case "7":
            notes.style.backgroundColor = "#c47972";
            break;
        case "8":
            notes.style.backgroundColor = "#bd473c";
            break;
        case "9":
            notes.style.backgroundColor = "#a876a2";
            break;
        case "10":
            notes.style.backgroundColor = "#0c1a0a";
            break;
        default:
            notes.style.backgroundColor = "#0b0b27ee";
            break;
    }
  }


  /* ............ */
   
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('main-search');
    const searchForm = document.querySelector('.search-bar');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        const googleURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleURL, '_blank');
      }
    });
  });
  