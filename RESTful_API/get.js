import axios from 'axios';
// Postavka za GET request
class Get {

    makeRequest(handler,param) {

        axios({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${param}`,
        })
            .then(status)
            // .then(index.json)
            .then(data => handler(data.data))
            .catch(error => console.log(error));
    }
}

export default Get;

