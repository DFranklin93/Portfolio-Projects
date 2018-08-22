
var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://unpkg.com/axios/dist/axios.min.js";
$("head").append(s);

$(function(){

  var C = false;
  var apiData;

  backgroundImg =[
    //Thunderstorm
    'https://farmersalmanac.com/wp-content/uploads/2015/06/Thunderstorm-5best.jpg',
    //Drizzle
    'https://fc03.deviantart.net/fs70/f/2011/132/3/a/leaving_by_draftpodium-d3g7nxw.jpg',
    //Rain
    'https://i.pinimg.com/originals/33/39/a5/3339a59d7b0697e11dc11a12f921abca.jpg',
    //Snow
    'https://i.pinimg.com/originals/ed/e9/76/ede9763d00b629e9a8472c46d75b0850.jpg',
    //Fog
    'https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765df2a852805815ffbfecc9c0d53e54&auto=format&fit=crop&w=1489&q=80',
    //Clear
    'https://static.pexels.com/photos/3590/nature-sky-sunny-clouds.jpg',
    //Cloudy
    'https://alliswall.com/file/1718/1920x1200/16:9/cloudy-weather-2.jpg',
  ]

  function displayTemp (F,C){
    if(C) return Math.round((F-32)*(5/9)) + '&deg; C';
    return Math.round(F) + '&deg; F';
  }

  function render (data, C){
    var currentWeather =  data.weather[0].description;
    var currentTemp = displayTemp(data.main.temp,C);
    var icon = data.weather[0].icon;

    $('#currentTemp').html(currentTemp);
    $('#currentWeather').html(currentWeather);

    var apiIcon = 'http://openweathermap.org/img/w/' + icon + '.png';
    $('#currentTemp').prepend('<img src='+apiIcon + '>');

    var currentWeatherImg = data.weather[0].id;
    // Thunderstorm
    if (currentWeatherImg >= 200 && currentWeatherImg <= 232){
      document.getElementById('body').style.background = 'url("http://alliswall.com/file/1718/1920x1200/16:9/cloudy-weather-2.jpg") no-repeat center center fixed';
      document.getElementById('body').style.backgroundSize = "cover";
      // Drizzle
    }else if (currentWeatherImg >= 500 && currentWeatherImg <= 531){
      document.getElementById('body').style.background = 'url("http://fc03.deviantart.net/fs70/f/2011/132/3/a/leaving_by_draftpodium-d3g7nxw.jpg") no-repeat center center fixed';
      document.getElementById('body').style.backgroundSize = "cover";
      // Rain
    }else if (currentWeatherImg >= 300 && currentWeatherImg <= 321){
      document.getElementById('body').style.background = 'url("https://i.pinimg.com/originals/33/39/a5/3339a59d7b0697e11dc11a12f921abca.jpg") no-repeat center center fixed';
      document.getElementById('body').style.backgroundSize = "cover";
      // Snow
    }else if(currentWeatherImg >= 600 && currentWeatherImg <= 622){
      document.getElementById('body').style.background = 'url("https://i.pinimg.com/originals/ed/e9/76/ede9763d00b629e9a8472c46d75b0850.jpg") no-repeat center center fixed';
      document.getElementById('body').style.backgroundSize = "cover";
      //Fog
    }else if(currentWeatherImg >= 701 && currentWeatherImg <= 781){
      document.getElementById('body').style.background = 'url("https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765df2a852805815ffbfecc9c0d53e54&auto=format&fit=crop&w=1489&q=80") no-repeat center center fixed';
      document.getElementById('body').style.backgroundSize = "cover";
      //Clear
    }else if(currentWeatherImg === 800){
      document.getElementById('body').style.background = 'url("https://static.pexels.com/photos/3590/nature-sky-sunny-clouds.jpg") no-repeat center center fixed';
      document.getElementById('body').style.backgroundSize = "cover";
      //cloudy
    }else if(currentWeatherImg >= 801 && currentWeatherImg <= 804){
      document.getElementById('body').style.background = 'url("https://alliswall.com/file/1718/1920x1200/16:9/cloudy-weather-2.jpg") no-repeat center center fixed';
      document.getElementById('body').style.backgroundSize = "cover";
    }
  }

  //Location data (change for google api)

  var locationForm = document.getElementById('location-form');
  locationForm.addEventListener('submit', geocode);

  function geocode(e){
    e.preventDefault();
    var location = document.getElementById('location-input').value;


    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address: location,
        key: 'AIzaSyAh2Dg090ANTXwZhHqGKE1K7Pa25iDB8vs',

      }
    })

    .then(function(response){
      // Log Full Response
      console.log(response);


  /*$.getJSON('http://maps.googleapis.com/maps/api/geocode/json').done(function(location){
    params:{
      address: location;
      key: 'AIzaSyAh2Dg090ANTXwZhHqGKE1K7Pa25iDB8vs';
    }*/

    //Intergrating practiceWeatherApp if statements into .js file
    var formattedAddress = response.data.results[0].formatted_address;
    var formattedAddressOutput = `${formattedAddress}
    `;

    //Address Components
    var addressComponents = response.data.results[0].address_components;

    //Geometry
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;

    var addressLength = response.data.results[0].address_components.length;

    if (addressLength == 3){
      var city = response.data.results[0].address_components[0].long_name;
      var state = response.data.results[0].address_components[1].long_name;
      var country = response.data.results[0].address_components[2].long_name;
      console.log('3');
    }else if (addressLength == 4){
      var city = response.data.results[0].address_components[0].long_name;
      var state = response.data.results[0].address_components[2].long_name;
      var country = response.data.results[0].address_components[3].long_name;
      //console.log('4'); working
    }else if (addressLength == 5){
      var city = response.data.results[0].address_components[0].long_name;
      var state = response.data.results[0].address_components[3].long_name;
      var country = response.data.results[0].address_components[4].long_name;
      //console.log('5'); working
    }else if(addressLength == 9){
      var city = response.data.results[0].address_components[3].long_name;
      var state = response.data.results[0].address_components[6].long_name;
      var country = response.data.results[0].address_components[7].long_name;
      //console.log('9'); working
    }else{
      var city = "";
      var state = response.data.results[0].address_components[0].long_name;
      var country = response.data.results[0].address_components[1].long_name;
      //console.log('Else'); working
    };


    $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=imperial&appid=7150ad82df7f767653433ea96ea1b31b' , function(data){
      apiData = data;
      console.log(apiData); //finally working!
      render(apiData, C);

      $('#toggle').click(function(){
        C=!C
        render(data,C);
        })
        // Output to app
        document.getElementById('formatted-address').innerHTML=formattedAddress;
        document.getElementById('city').innerHTML=city;
        document.getElementById('state').innerHTML=state;
        document.getElementById('country').innerHTML=country;
        document.getElementById('latitude').innerHTML=latitude;
        document.getElementById('longitude').innerHTML=longitude;
      })
      .catch(function(error){
        console.log(error);
      });
      })
    }
  });
