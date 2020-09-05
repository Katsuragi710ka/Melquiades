import { all, put, takeLatest } from 'redux-saga/effects';

import {
	changeWord,
	changeWordType,
	setWord
} from '@appAction/util/filter';

// APIs
function* invokeChangeWord(action: changeWordType) {
	const { word } = action.payload;
	yield put(setWord.action(word));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
	yield takeLatest(changeWord.name, invokeChangeWord);
}

export default function* saga() {
	yield all([watchAsyncTriggers()]);
}