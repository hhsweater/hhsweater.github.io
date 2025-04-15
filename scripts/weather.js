

function changeStyle() {//changestyle to hide button after press
  let myButt = document.getElementById('btn_get_data');

  if(myButt.hasAttribute('class')) {
    myButt.removeAttribute('class');
}

else{
  myButt.setAttribute('class', 'changed');
}//end else
}//end changestyle



var y = 1;
function toggleShow() {//toggle descriptions
  var x = document.getElementById("showhide");

  if (x.style.display === "none" && y == 1) {
    x.style.display = "block";
    y = 0;
    return y;
  } else {
    x.style.display = "none";

  }
}//toggle end




//geolocation start
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error);
      } else {
          document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
          document.getElementById("demo2").innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  function success(position) {
          document.getElementById("demo").innerHTML = position.coords.latitude;
          document.getElementById("demo2").innerHTML = position.coords.longitude;
  }

  function error() {
          alert("Sorry, no position available.");
  }
//geolocation end



function handleButton1() {
  toggleShow();
  changeStyle();
  let latt = document.getElementById("demo").innerHTML ;
  let long = document.getElementById("demo2").innerHTML;
  let lat = latt;
  let lon = long;
  let appid = "9094bc84e430edac5c0aa47cbe1796e5"
  let xhr = new XMLHttpRequest();
  var jsonResponse = xhr.response;
  var url = "https://api.openweathermap.org/data/2.5/weather?lat=:lat&lon=:lon&appid=:appid&units=imperial"
  url = url.replaceAll(":lat", lat)
            .replaceAll(":lon", lon)
            .replaceAll(":appid", appid)
console.log(url);

  let message = "";
  let ctryName = "";
  let wthrDesc = "";
  let wthrMain = "";
  let cityName = "";
  let tmp = "";
  let prssr = "";
  let humid = "";
  let flslk = "";
  let theSpan = document.getElementById('output');
  let weatherMain = document.getElementById('weatherMain');
  let weatherDesc = document.getElementById('weatherDesc');
  let mainTemp = document.getElementById('temp');
  let mainFeels = document.getElementById('feelsLike');
  let mainPress = document.getElementById('pressure');
  let mainHumid = document.getElementById('humidity');
  let name = document.getElementById('name');
  let country = document.getElementById('country');
  console.log('hi');
  //or use the function() { ... } syntax
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      let theArray = JSON.parse(xhr.response);
      console.log('hi3');
      console.log(theArray);
        message += "<br>";
        //message += theArray.coord.lon + "<br>";
        //message += theArray.coord.lat + "<br>";
        //message += theArray.weather[0].id + "<br>";
        wthrMain += theArray.weather[0].main ;
        wthrDesc += theArray.weather[0].description;
        //message += theArray.weather[0].icon + "<br>";
        message += theArray.base;
        tmp += theArray.main.temp;
        flslk += theArray.main.feels_like;
        //message += theArray.main.temp_min + "<br>";
        //message += theArray.main.temp_max + "<br>";
        prssr += theArray.main.pressure;
        humid += theArray.main.humidity;
        //message += theArray.main.sea_level + "<br>";
        //message += theArray.main.grnd_level + "<br>";
        //message += theArray.visibility + "<br>";
        //message += theArray.wind.speed + "<br>";
        //message += theArray.wind.deg + "<br>";
        //message += theArray.wind.gust + "<br>";
        //message += theArray.clouds.all + "<br>";
        //message += theArray.dt + "<br>";
        ctryName += theArray.sys.country;
        //message += theArray.sys.sunrise + "<br>";
        //message += theArray.sys.sunset + "<br>";
        //message += theArray.timezone + "<br>";
        //message += theArray.id + "<br>";
        cityName += theArray.name;
        //message += theArray.cod + "<br><br>";
        console.log('hi2');
      //}//end for

      //theSpan.innerHTML = message;
      country.innerHTML = ctryName;
      name.innerHTML = cityName;
      weatherMain.innerHTML = wthrMain;
      weatherDesc.innerHTML = wthrDesc;
      temp.innerHTML = tmp;
      feelsLike.innerHTML = flslk;
      pressure.innerHTML = prssr;
      humidity.innerHTML = humid;

    }
  }//end xhr

  xhr.open("GET", url, true);
  xhr.send();
}//end handleButton1



function start() {
  let btn1 = document.getElementById('btn_get_data');
  btn1.addEventListener('click', handleButton1);
  toggleShow();
}//end start


window.addEventListener('load', start);
