// Exemple de code pour faire une requête API en utilisant la librairie 'request' 
const request = require("request"); 
 
const API_KEY = "clé_api"; 
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q="; 
 
function getTypeData(console, callback) { 
  const url = BASE_URL + console; 
  request(url, function (error, response, body) { 
    if (error) { 
      callback(error, null); 
    } else { 
      const weatherData = JSON.parse(body); 
      callback(null, weatherData); 
    } 
  }); 
}