const readline = require("readline");

const API_KEY = "911606da19e230428e07486f8b47abc6";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to fetch weather data
const getWeather = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error("City not found.");
    }

    const data = await response.json();
    
    console.log(`\n🌍 City: ${data.name}`);
    console.log(`🌡️ Temperature: ${data.main.temp}°C`);
    console.log(`☁️ Condition: ${data.weather[0].description}`);
    console.log(`💨 Wind Speed: ${data.wind.speed} m/s`);
    console.log(`🌅 Humidity: ${data.main.humidity}%`);
    console.log(`🫁 Air Pressure: ${data.main.pressure} hPa`);

  } catch (error) {
    console.log(" Error: " + error.message);
  }
};

rl.question("Enter city name: ", (city) => {
  getWeather(city).finally(() => rl.close());
});
