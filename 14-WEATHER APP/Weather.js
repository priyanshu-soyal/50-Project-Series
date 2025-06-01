const API_KEY = `a1237dd67801994e5bf1a304ae6a8e0f`; 

let form = document.querySelector("form");
let weatherData = document.getElementById("weather-data");
let searchInput = document.getElementById("searchInput");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = searchInput.value.trim();
    if (!city) {
        showError("Please enter a city name");
        return;
    }
    getWeather(city);
});

async function getWeather(city) {
    try {
        showLoading();
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        let response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error("City not found");
        }
        
        let data = await response.json();
        showWeather(data);
    } catch (error) {
        showError(error.message);
    }
}

function showLoading() {
    weatherData.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading weather data...</p>
        </div>
    `;
}

function showError(message) {
    weatherData.innerHTML = `
        <div class="error">
            <i class="fas fa-exclamation-circle"></i>
            <h3>${message}</h3>
        </div>
    `;
}

function showWeather(data) {
    const { main, weather, wind, name, sys } = data;
    
    weatherData.innerHTML = `
        <div class="weather-info">
            <div class="location">
                <h2>${name}, ${sys.country}</h2>
                <p>${new Date().toLocaleDateString()}</p>
            </div>
            
            <div class="main-weather">
                <div class="temperature">
                    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="weatherIcon">
                    <h2>${Math.round(main.temp)}&deg; C</h2>
                    <h4>${weather[0].description}</h4>
                </div>
                
                <div class="details">
                    <div class="detail-item">
                        <i class="fas fa-temperature-low"></i>
                        <div>
                            <p>Feels Like</p>
                            <p>${Math.round(main.feels_like)}&deg; C</p>
                        </div>
                    </div>
                    
                    <div class="detail-item">
                        <i class="fas fa-wind"></i>
                        <div>
                            <p>Wind Speed</p>
                            <p>${wind.speed} m/s</p>
                        </div>
                    </div>
                    
                    <div class="detail-item">
                        <i class="fas fa-tint"></i>
                        <div>
                            <p>Humidity</p>
                            <p>${main.humidity}%</p>
                        </div>
                    </div>
                    
                    <div class="detail-item">
                        <i class="fas fa-temperature-high"></i>
                        <div>
                            <p>Min/Max</p>
                            <p>${Math.round(main.temp_min)}&deg; / ${Math.round(main.temp_max)}&deg; C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

