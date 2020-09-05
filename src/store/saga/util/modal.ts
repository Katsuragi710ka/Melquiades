import { all, put, takeLatest } from 'redux-saga/effects';

import {
  changeOpened,
  changeOpenedType,
  setOpened
} from '@appAction/util/modal';

// APIs
function* invokeChangeOpened(action: changeOpenedType) {
  const { opened } = action.payload;
  yield put(setOpened.action(opened));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
  yield takeLatest(changeOpened.name, invokeChangeOpened);
}

export default function* saga() {
  yield all([watchAsyncTriggers()]);
}