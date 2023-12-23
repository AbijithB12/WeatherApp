const apiKey = "f3989207edcb9384738e55cb54d1b41a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector('.city').innerHTML = data.name;
  // console.log(data.name);
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.windspeed').innerHTML = data.wind.speed + ' Kmph';
}

searchBox.addEventListener("keypress", (e) => {
    // console.log("clicked")
    if (e.key=='Enter'){
      checkWeather(searchBox.value);
    }
})
searchBtn.addEventListener("click", () => {
  console.log(searchBox.value)
    checkWeather(searchBox.value);

})

// checkWeather('Mumbai');


