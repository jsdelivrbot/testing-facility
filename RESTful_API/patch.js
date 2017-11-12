import axios from 'axios';

// PATCH request samo menja mali deo , sve isto kao PUT
class Patch {
  makeRequest(params) {
    axios({
      method: 'PATCH',
      url: `https://jsonplaceholder.typicode.com/posts/${params.page}`,
      headers: { "Content-type": "application/json; charset=UTF-8" },
      responseType: 'json',
      data: JSON.stringify({
        // izmena nekog dela JSON file-a, npr samo body
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

export default Patch;