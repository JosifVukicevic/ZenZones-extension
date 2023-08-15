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

    let noteInput = document.getElementById('noteInput');

    if (imagePath.includes("background-1")) {
        notes.style.backgroundColor = "#0b0b27ee";
        breakBox.style.backgroundColor = "#0b0b27ee";
        wellnessTipBox.style.backgroundColor = "#0b0b27ee";
    } else if (imagePath.includes("background-2")) {
        notes.style.backgroundColor = "#2e332f";
        breakBox.style.backgroundColor = "#2e332f";
        wellnessTipBox.style.backgroundColor = "#2e332f";
    } else if (imagePath.includes("background-3")) {
        notes.style.backgroundColor = "#c25d2b";
        breakBox.style.backgroundColor = "#c25d2b";
        wellnessTipBox.style.backgroundColor = "#c25d2b";
    } else if (imagePath.includes("background-4")) {
        notes.style.backgroundColor = "#1c4b57";
        breakBox.style.backgroundColor = "#1c4b57";
        wellnessTipBox.style.backgroundColor = "#1c4b57";
    } else if (imagePath.includes("background-5")) {
        notes.style.backgroundColor = "#477480";
        breakBox.style.backgroundColor = "#477480";
        wellnessTipBox.style.backgroundColor = "#477480";
    } else if (imagePath.includes("background-6")) {
        notes.style.backgroundColor = "#243e45";
        breakBox.style.backgroundColor = "#243e45";
        wellnessTipBox.style.backgroundColor = "#243e45";
    } else if (imagePath.includes("background-7")) {
        notes.style.backgroundColor = "#c47972";
        breakBox.style.backgroundColor = "#c47972";
        wellnessTipBox.style.backgroundColor = "#c47972";
    } else if (imagePath.includes("background-8")) {
        notes.style.backgroundColor = "#bd473c";
        breakBox.style.backgroundColor = "#bd473c";
        wellnessTipBox.style.backgroundColor = "#bd473c";
    } else if (imagePath.includes("background-9")) {
        notes.style.backgroundColor = "#a876a2";
        breakBox.style.backgroundColor = "#a876a2";
        wellnessTipBox.style.backgroundColor = "#a876a2";
    } else if (imagePath.includes("background-10")) {
        notes.style.backgroundColor = "#0c1a0a";
        breakBox.style.backgroundColor = "#0c1a0a";
        wellnessTipBox.style.backgroundColor = "#0c1a0a";
    }
});

// Prikaz i funkcionalnost sata

const time = document.getElementById('time');
let isClockVisible = false;

clockIcon.addEventListener('click', () => {
    isClockVisible = !isClockVisible;
    time.style.visibility = isClockVisible ? 'visible' : 'hidden';

    tigerText = document.getElementById('tiger-txt');

    if (isClockVisible) {
        const currentTime = new Date().toLocaleTimeString();
        time.textContent = currentTime;
    }

    // Ispisivanje poruke jutro, dan, noc

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const formattedTime = currentTime.toLocaleTimeString();

    if (currentHour > 4 && currentHour < 12) {
        tigerText.textContent = 'Good morning, Tiger!';
    } else if (currentHour < 20) {
        tigerText.textContent = 'Good day, Tiger!';
    } else {
        tigerText.textContent = 'Good evening, Tiger!';
    }

    time.textContent = formattedTime;
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
        // Pojavi se jednom, ako treba vise puta staviti visibility 'hidden'
        wellnessTipBox.style.display = 'none';
    }, 30000);
});

/*

const time = document.getElementById('time');
const clockIcon = document.getElementById('clock-icon');
let isClockVisible = false;
let intervalId; // Dodali smo varijablu za spremanje ID intervala

clockIcon.addEventListener('click', () => {
    isClockVisible = !isClockVisible;
    time.style.visibility = isClockVisible ? 'visible' : 'hidden';

    if (isClockVisible) {
        updateTime(); // Ažuriramo vrijeme odmah pri kliku
        intervalId = setInterval(updateTime, 1000); // Pozivamo updateTime svake sekunde
    } else {
        clearInterval(intervalId); // Brišemo interval kad je sat skriven
    }
});

function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    time.textContent = currentTime;
}

*/

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


const inputElement = document.getElementById('main-search');

inputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const searchQuery = inputElement.value;
        if (searchQuery.trim() !== '') {
            const encodedQuery = encodeURIComponent(searchQuery);
            window.location.href = `https://www.google.com/search?q=${encodedQuery}`;
        }
    }
});

  