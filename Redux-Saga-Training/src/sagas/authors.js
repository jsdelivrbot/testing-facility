import { takeEvery, put, call } from 'redux-saga/effects';
import {
	FETCH_AUTHORS_SUCCESS,
	FETCH_AUTHORS_ERROR,
	FETCH_AUTHORS
} from '../actions/authors';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
	headers: { 'X-Custom-Header': '*/*' }
});

function* workAuthorFetch(action) {
	try {
		const data = yield call(instance, '/users');
		yield put({ type: FETCH_AUTHORS_SUCCESS, payload: data.data });
	} catch (error) {
		yield put({ type: FETCH_AUTHORS_ERROR, payload: error });
	}
}

export default function* watchAuthorFetch() {
	yield takeEvery(FETCH_AUTHORS, workAuthorFetch);
}

