import { all } from 'redux-saga/effects';

import tagSaga from '@appSaga/entity/tag';

export default function* saga() {
	yield all([
		...tagSaga()
	]);
}