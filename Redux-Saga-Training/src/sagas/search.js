import { takeLatest, call, throttle, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { UPDATE_SEARCH, RECORD_SEARCH } from '../actions/authors';

function* workSearchUpdate({ payload }) {
    yield call(delay, 500)
    console.warn('search term recorded: ', payload);
    yield put({ type: RECORD_SEARCH, payload });
}

export default function* watchSearchUpdate() {
    yield takeLatest(UPDATE_SEARCH, workSearchUpdate)
}