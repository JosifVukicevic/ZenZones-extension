var clockIcon = document.getElementById('clock-icon');
var weatherIcon = document.getElementById('weather-icon');
var wellnessIcon = document.getElementById('wellness-icon');
var breakIcon = document.getElementById('break-icon');
var exerciseIcon = document.getElementById('exercise-icon');
var journalIcon = document.getElementById('journal-icon');
var photosIcon = document.getElementById('photos-icon');

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

const weatherTab = document.getElementById('weather-tab');
let isWeatherTabVisible = false;

weatherIcon.addEventListener('click', () => {
    isWeatherTabVisible = !isWeatherTabVisible;
    weatherTab.style.visibility = isWeatherTabVisible ? 'visible' : 'hidden';
});

const wellnessTipBox = document.getElementById('wellness-tip-box');
const wellnessTipContent = document.getElementById('wellness-tip-content');

wellnessIcon.addEventListener('click', () => {
    wellnessTipBox.style.visibility = 'visible';

    // Sadrzaj wellness tipa
    wellnessTipContent.textContent = 'Dnevni wellness tip!';

    setTimeout(() => {
        wellnessTipBox.style.display = 'none';
    }, 30000);
});


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