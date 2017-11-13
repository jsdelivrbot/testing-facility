import Get from './get';
import Post from './post';
import Put from './put';
import Patch from './patch';
import Delete from './delete';
import Render from './render';

class Index { 
    // proveravam status i returnujem promise
    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }
    // parsiram response u JSON format, potrebno za FETCH ali ne i za AXIOS
    json(response) {
        return response.json();
    }

    initiateListeners() {
        document.getElementById('get-button').addEventListener('click', () => {
            let value = document.getElementById('text').value;
            new Get().makeRequest(this.grabData, value);
        });

        document.getElementById('post-button').addEventListener('click', () => {
            let page = document.getElementById('postnum').value;
            let title = document.getElementById('posttitle').value;
            let body = document.getElementById('postbody').value;

            let postData = { page, title, body };
            new Post().makeRequest(postData);
        });

        document.getElementById('put-button').addEventListener('click', () => {
            let page = document.getElementById('putnum').value;
            let title = document.getElementById('puttitle').value;
            let body = document.getElementById('putbody').value;

            let putData = { page, title, body }
            new Put().makeRequest(putData);
        });
    }

    grabData(data) {
        let render = new Render(data);
        render.renderData();
    }
}

new Index().initiateListeners();
