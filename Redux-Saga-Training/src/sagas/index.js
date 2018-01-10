import { all, fork } from 'redux-saga/effects';

import hello from './hello';
import authors from './authors';
import search from './search';
import logger from './logger';

export default function* rootSaga() {
	yield all([hello(), authors(), search(), logger()]);
}
