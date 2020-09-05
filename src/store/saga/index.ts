import { all } from 'redux-saga/effects';

import entitySaga from '@appSaga/entity';
import utilSaga from '@appSaga/util';

export default function* saga() {
	yield all([
		...entitySaga(),
		...utilSaga()
	]);
}