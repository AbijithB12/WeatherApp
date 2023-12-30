const apiKey = "f3989207edcb9384738e55cb54d1b41a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.Weather-Icon')


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  // console.log(data);
  document.querySelector('.city').innerHTML = data.name;
  console.log(data.name+data.weather[0].main);
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.windspeed').innerHTML = data.wind.speed + ' Km/h';

  if(data.weather[0].main =="Smoke"|| data.weather[0].main =="Mist" || data.weather[0].main =="Haze" || data.weather[0].main =="Fog" ){
    weatherIcon.src = "images/mist.png";
  }
  else if(data.weather[0].main =="Snow"){
    weatherIcon.src = "images/snow.png";
  }
  else if(data.weather[0].main =="Thunderstorm"){
    weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
  }
  else if(data.weather[0].main =="Rain"){
    weatherIcon.src = "images/rain.png";
  }
  else if(data.weather[0].main =="Clouds"){
    weatherIcon.src = "images/clouds.png";
  }
  else if(data.weather[0].main =="Clear"){
    weatherIcon.src = "images/clear.png";
  }

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


