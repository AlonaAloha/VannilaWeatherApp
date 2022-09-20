function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round (response.data.wind.speed);
}

let apiKey ="854d931b03dfa3d9b694dd7d5ecb6684";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=&{apiKey}&units=metrics`;

axios.get(url).then(displayTemperature);
