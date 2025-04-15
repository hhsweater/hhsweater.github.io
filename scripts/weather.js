//LOTS OF CHANGESTYLES BELOW

function changeStyleLatDesc() {//changestyle to hide button after press
  let myButt = document.getElementById('latDesc');
  if(myButt.hasAttribute('class')) {
    myButt.removeAttribute('class');
}
else{
  myButt.setAttribute('class', 'changed');
  }//end else
}//end button changestyle

function changeStyleLongDesc() {//changestyle to hide button after press
  let myButt = document.getElementById('longDesc');
  if(myButt.hasAttribute('class')) {
    myButt.removeAttribute('class');
}
else{
  myButt.setAttribute('class', 'changed');
  }//end else
}//end button changestyle

//Handles mouseover and mouseout for Doll images
function handleDollmouseover(x, image) {
// x is equal to 1 when the page starts, then on mouseover it increments up to 2
//then back to 1 on mouseout
    if (x == 1){
      image.src = 'assets/rainydoll.gif';
    }
    if (x == 2){
      image.src = 'assets/snowydoll.gif';
    }
}


function changeStyle() {//changestyle to hide button after press
  let myButt = document.getElementById('btn_get_data');
  if(myButt.hasAttribute('class')) {
    myButt.removeAttribute('class');
}
else{
  myButt.setAttribute('class', 'changed');
  }//end else
}//end button changestyle

function changeStyleDisclaimer() {//changestyle to hide "Must Allow Access" after press
  let disclaim = document.getElementById('hidethis');
  if(disclaim.hasAttribute('class')) {
    disclaim.removeAttribute('class');
}
else{
  disclaim.setAttribute('class', 'changed');
  }//end else
}//end disclaimer changestyle

function changeStyleLoading() {//changestyle to hide loading wheel after press
  let disclaim = document.getElementById('loading');
  if(disclaim.hasAttribute('class')) {
    disclaim.removeAttribute('class');
}
else{
  disclaim.setAttribute('class', 'changed');
  }//end else
}//end disclaimer changestyle

//LOTS OF CHANGESTYLES ABOVE

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
    changeStyleLoading();
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error);
      } else {
          document.getElementById("latter").innerHTML = "Geolocation is not supported by this browser.";
          document.getElementById("longer").innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  function success(position) {
          document.getElementById("latter").innerHTML = position.coords.latitude;
          document.getElementById("longer").innerHTML = position.coords.longitude;
          changeStyleDisclaimer();
          changeStyleLoading();
          changeStyleLatDesc();
          changeStyleLongDesc();
  }

  function error() {
          alert("Sorry, no position available.");
  }
//geolocation end



function handleButton1() {
  toggleShow();
  changeStyle();
  let latt = document.getElementById("latter").innerHTML ;
  let long = document.getElementById("longer").innerHTML;
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
  //or use the function() { ... } syntax
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      let theArray = JSON.parse(xhr.response);
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
      //}//end for
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
  changeStyleLoading();
  changeStyleLatDesc();
  changeStyleLongDesc();
}//end start


window.addEventListener('load', start);
