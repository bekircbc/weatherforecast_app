const url = "https://api.openweathermap.org/data/2.5/";
const key = "357731106cee3c1445080c22e2bcb9bc";

const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchbar.value);
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  console.log(result);
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)} °C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)} °C / ${Math.round(
    result.main.temp_max
  )} °C`;

  let wind1 = document.querySelector(".wind-1");
  wind1.innerText = `Wind Speed : ${result.wind.speed} knot`;

  let wind2 = document.querySelector(".wind-2");
  wind2.innerText = `Wind Direction: ${result.wind.deg} °`;
};

// const directionFinder = (degree) => {
//   if (degree < 22.5 && degree < 57.5) return "NE";
//   if (degree <= 57.5 && degree < 112.5) return "E";
//   if (degree <= 15 && degree < 30) return "NE";
//   if (degree <= 15 && degree < 30) return "NE";
//   if (degree <= 15 && degree < 30) return "NE";
//   if (degree <= 15 && degree < 30) return "NE";
//   if (degree <= 15 && degree < 30) return "NE";
//   if (degree <= 15 && degree < 30) return "NE";
// };

const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keypress", setQuery);
