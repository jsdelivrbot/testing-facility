import axios from 'axios';

// Pravim custom POST request sa svim parametrima
class Post {
  makeRequest(params) {
    axios({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      responseType: 'json',
      data: JSON.stringify({
        title: params.title,
        body: params.body,
        // id: Number(params.page),
        userId: 1,
      })
    })
      .then(status)
      // .then(index.json)
      .then(data => console.log(data))
      .catch(error => console.log('Fetch Error :-S', error));
  }
}

export default Post;