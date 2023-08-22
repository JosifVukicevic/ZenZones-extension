// Funkcija za dobijanje vremenske prognoze na osnovu geolokacije
function getWeatherByLocation(latitude, longitude) {
    const apiKey = '54f8adfea7a9457b89b75038231808';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;

    // Unutar .then(data => { ... }) bloka u funkciji getWeatherByLocation
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = `${data.location.name}, ${data.location.country}`;
            const temperature = `${data.current.temp_c}°C`;
            const weatherIconUrl = `https:${data.current.condition.icon}`;
            const weatherIcon = document.getElementById('weather-icon-data');
            weatherIcon.src = weatherIconUrl;

            document.getElementById('location').textContent = `${location}`;
            document.getElementById('temperature').textContent = `${temperature}`;
        })
        .catch(error => {
            console.error('Error!', error);
            document.getElementById('weather-widget').textContent = 'Error!';
        });
}

// Funkcija za dobijanje geolokacije korisnika
function getGeolocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getWeatherByLocation(latitude, longitude);
        });
    } else {
        console.error('Error!');
    }
}

// Pozivanje funkcije za dobijanje geolokacije
getGeolocation();
