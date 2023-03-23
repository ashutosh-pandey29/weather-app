const apiKey = "c3725cb09008d1da788ac1aead91faf1";

const form = document.querySelector("form");

form.addEventListener('submit' , function(e){

    e.preventDefault();
    const cityName = document.getElementById("cityName").value;
    callWeatherData(cityName);

});


async function callWeatherData(cityName){

    try{
        let url  = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        showWeatherInfo(data);
    }catch(error){
        alert("Sorry City Not Found");
    }
}


const showWeatherInfo =(data)=>{
    console.log(data);

    // document.getElementById("weather-img").setAttribute("src" , sun)
    document.getElementById("weather").innerHTML=data.weather[0].description;

    document.getElementById("city").innerHTML=data.name;
    document.getElementById("temperature").innerHTML=`${Math.round(data.main.temp-273.15)}&deg C`;
    document.getElementById("humidity").innerHTML=`${data.main.humidity} %`;
    document.getElementById("pressure").innerHTML=`${data.main.pressure} hpa`;
    document.getElementById("windSpeed").innerHTML=`${data.wind.speed} m/s`;
   
}