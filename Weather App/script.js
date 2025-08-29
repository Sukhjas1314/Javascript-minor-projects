const API_KEY = "84f458a763de8947896b158f5b14ffb7";

document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("cityName").value;
    if (!city) {
        alert("Enter a valid city name");
        return;
    }
    getWeather(city);
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric⁠`);
        const data = await response.json();

        if (data.cod == "404") {
            document.getElementById("result").innerHTML = `
            <p>City not found!</p>
            `;
            return;
        }

        document.getElementById("result").innerHTML = `
        <h2>${data.name}, ${data.sys.country}̈</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>🌥️ Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data : ", error);
        document.getElementById("result").innerHTML = `<p>Something went wrong!</p>`;
    }
}