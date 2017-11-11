const axios = require('axios');
let url = 'https://api.github.com/search/users?q=marko&per_page=5';

class Users {
    makeRequest(handler) {
        return axios.get(url)
            .then(response => handler(response.data.items))
            .catch(error => new Error(error));
    }
}

export default Users;

