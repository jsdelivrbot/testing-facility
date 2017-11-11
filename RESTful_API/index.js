import axios from 'axios';

// proveravam status i returnujem promise
function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}
// parsiram response u JSON format
function json(response) {
    return response.json()
}

// Postavka za GET request
axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
})
.then(status)
.then(json)
.then(data => console.log(data))
.catch(error => console.log(error));

// Pravim custom POST request sa svim parametrima
axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: {"Content-type": "application/json; charset=UTF-8"},
    responseType: 'json',
    data: JSON.stringify({
      title: 'My First POST Request',
      body: 'It worked!',
      userId: 1,
    })
})
.then(status)
.then(json)
.then(data => console.log(data))
.catch(error => console.log('Fetch Error :-S', error));

