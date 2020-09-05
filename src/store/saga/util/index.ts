import { all } from 'redux-saga/effects';

import appStatusSaga from '@appSaga/util/appStatus';
import filterSaga from '@appSaga/util/filter';
import modalSaga from '@appSaga/util/modal';
export default function* saga() {
	yield all([
		...appStatusSaga(),
		...filterSaga(),
		...modalSaga()
	]);
}