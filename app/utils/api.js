var axios = require('axios');
var _APIKEY = require('./key');

var _currentWeatherURLBefore =
  'http://api.openweathermap.org/data/2.5/weather?q=';
var _currentWeatherURLAfter = '&type=accurate&APPID=';
var _forecastWeatherURLBefore =
  'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
var _forecastWeatherURLAfter = '&type=accurate&APPID=';

function getCurrentWeather(city) {
  var url = _currentWeatherURLBefore + city + _currentWeatherURLAfter + _APIKEY;

  return axios.get(url).then(function(currentWeatherData) {
    return currentWeatherData.data;
  });
}

function getForecastWeather(city) {
  var url =
    _forecastWeatherURLBefore + city + _forecastWeatherURLAfter + _APIKEY;

  return axios.get(url).then(function(forecastWeatherData) {
    return forecastWeatherData.data;
  });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecastWeather: getForecastWeather
};
