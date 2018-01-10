import { take, takeEvery, select } from 'redux-saga/effects';

function* logger(action) {
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
}

export default function* watchAndLog() {
    yield takeEvery('*', logger);
}