import axios from 'axios';

// DELETE is self explanatory
class Delete {
    makeRequest(page) {
        axios({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/posts/${page}`,
        });
    }
}

export default Delete;


