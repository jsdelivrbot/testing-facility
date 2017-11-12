import axios from 'axios';

// Pravim custom PUT request sa svim parametrima
class Put {
  makeRequest(params) {
    axios({
      method: 'PUT',
      url: `https://jsonplaceholder.typicode.com/posts/${params.page}`,
      headers: { "Content-type": "application/json; charset=UTF-8" },
      responseType: 'json',
      data: JSON.stringify({
        title: params.title,
        body: params.body,
        userId: 1,
      })
    })
      .then(status)
      // .then(index.json)
      .then(data => console.log(data))
      .catch(error => console.log('Fetch Error :-S', error));
  }
}

export default Put;