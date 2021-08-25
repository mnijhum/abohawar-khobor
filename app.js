const apiKey = "3713c2eca67584ad1ced5db34a6299f1";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function loadWeatherData(cityName) {
  fetch(`${baseUrl}${cityName}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => showWeatherData(data));
}

function showWeatherData(data) {
  const city = data.name;
  const temp = data.main.temp;
  const condition = data.weather[0].description;
  const icon = data.weather[0].icon;
  document.getElementById("city").innerText = city;
  document.getElementById("temp").innerText = temp;
  document.getElementById("condition").innerText = condition;
  document.getElementById("icon").src =
    "http://openweathermap.org/img/wn/" + icon + "@2x.png";
}

const search = document.getElementById("search");
search.addEventListener("click", function () {
  cityName = document.getElementById("city-name").value;
  console.log(cityName);
  loadWeatherData(cityName);
});

loadWeatherData("Dhaka");
