const fetch = require('node-fetch');
const result = 
    fetch('https://vatapi.com/v1/country-code-check?code=DE', {
        headers: {
            'apikey': '0800fc577294c34e0b28ad2839435945'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
