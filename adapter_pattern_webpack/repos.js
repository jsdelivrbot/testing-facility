import axios from 'axios';
let url = 'https://api.github.com/repositories?q=explore&per_page=10';

class Repos {
    makeRequest(handler) {
        return axios.get(url)
            .then(response => handler(response.data))
            .catch(() => handler([]));            
    }
}

export default Repos;