document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;

    if (city) {
        const apiKey = 'fe93175f83224c33ac7123008242010'; //WeatherAPI key
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        fetch(url)
            .then(response => {
                console.log(response); 
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
                const temperature = data.current.temp_c; // Temperature in Celsius
                const weatherDescription = data.current.condition.text; // Weather condition description
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = `
                    <h2>${data.location.name}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Condition: ${weatherDescription}</p>
                `;
            })
            .catch(error => {
                console.error(error);
                document.getElementById('result').innerHTML = error.message;
            });
    } else {
        document.getElementById('result').innerHTML = 'Please enter a city name.';
    }
});
