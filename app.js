const input = document.getElementById('inputs');
const srcBtn = document.getElementById('srcBtn');
const description = document.getElementById('description');
const cityName = document.getElementById('name');
const temperature = document.getElementById('temp');


srcBtn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=1c13dba0af40e52df36d1ab864750737')
        .then(res => res.json())
        .then(data => {

            console.log(data);
            const nameValue = data['name'];
            const temperatureValue = data['main']['temp'];
            const descriptionValue = data['weather'][0]['description'];

            cityName.innerHTML = nameValue;
            temperature.innerHTML = temperatureValue;
            description.innerHTML = descriptionValue;
        })
        .catch(err => console.log("wrong city"))
})