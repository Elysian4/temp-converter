function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var result = document.getElementById('result');
    var body = document.body;

    if (!isNaN(temperature)) {
        if (unit === 'celsius') {
            result.innerHTML = `Converted Temperature: ${temperature} °C = ${(temperature * 9 / 5) + 32} °F = ${temperature + 273.15} K`;
        } else if (unit === 'fahrenheit') {
            result.innerHTML = `Converted Temperature: ${temperature} °F = ${(temperature - 32) * 5 / 9} °C = ${(temperature - 32) * 5 / 9 + 273.15} K`;
        } else if (unit === 'kelvin') {
            result.innerHTML = `Converted Temperature: ${temperature} K = ${(temperature - 273.15) * 9 / 5 + 32} °F = ${temperature - 273.15} °C`;
        }

        
        var imageUrls = [
            'https://images.unsplash.com/photo-1586194483662-d84a7a2deba1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVtcGVyYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1594790628624-9e563bea851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlbXBlcmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            'https://media.istockphoto.com/id/1403201134/photo/thermometer-shows-high-temperature-on-red-background.webp?b=1&s=170667a&w=0&k=20&c=P87WJTpz5MSnrUIw3TuJen4xYsAcThtBtiQ1mjz9s8I=',
            'https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?b=1&s=170667a&w=0&k=20&c=n21SIzH1emvYJmePa_kg8r0AcdVu2vTOk327qk4tYzE=',
            'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            
        ];

        
        var randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        
        body.style.backgroundImage = `url('${randomImageUrl}')`;
    } else {
        result.innerHTML = 'Please enter a valid number.';
    }
}
