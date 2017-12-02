import axios from 'axios';
import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from '../constants';

export const fetchService = () => {

    headers() {

        let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);

        if (sessionId) {
            return { 'SessionId': sessionId, 'Key': API_KEY, 'Content-Type': 'application/json' };
        }
        return { 'Key': API_KEY, 'Content-Type': 'application/json' };
    }

    get(url, responseHandler, rejectHandler) {
        axios({
            method: 'get',
            url: `${BASE_URL}${url}`,
            headers: this.headers()
        })
            .then(response => responseHandler(response.data))
            .catch(error => rejectHandler(error.response));
    }

    post(url, data, responseHandler, rejectHandler) {

        axios({
            method: 'post',
            url: `${BASE_URL}${url}`,
            data: data,
            headers: this.headers()
        })
            .then(response => responseHandler(response.data))
            .catch(error => rejectHandler(error.response));
    }

    put(url, data, responseHandler, rejectHandler) {

        axios({
            method: 'put',
            url: `${BASE_URL}${url}`,
            data: data,
            headers: this.headers()
        })
            .then(response => responseHandler(response.data))
            .catch(error => rejectHandler(error.response));
    }

    delete(url, responseHandler, rejectHandler) {

        axios({
            method: 'delete',
            url: `${BASE_URL}${url}`,
            headers: this.headers()
        })
            .then(response => responseHandler(response.data))
            .catch(error => rejectHandler(error.response));
    }
}