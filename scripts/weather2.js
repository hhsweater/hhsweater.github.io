var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});
xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=42.68&lon=-83.40&appid=9094bc84e430edac5c0aa47cbe1796e5");
//xhr.setRequestHeader("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");
//xhr.setRequestHeader("x-rapidapi-key", "[9094bc84e430edac5c0aa47cbe1796e5]");
xhr.send(data);
