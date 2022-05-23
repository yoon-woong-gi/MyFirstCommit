
const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const APIKey = '7de95929b6d536bba20baadce98ff7c8';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${APIKey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log(data.name, data.weather[0].main);
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}   `;
            city.innerText = `   ${data.name}`;
        });
}   
function onGeoError() {
    alert("Can't find you. No weather for you.")

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
