import { all, put, takeLatest } from 'redux-saga/effects';

import {
	setBasicStatus,
	setBasicStatusType,
	setDangerStatus,
	setDangerStatusType,
	setStatus,
	setSuccessStatus,
	setSuccessStatusType,
	setWarningStatus,
	setWarningStatusType
} from '@appAction/util/appStatus';

import { basicStatus } from '@appUtil/appStatus';

// APIs
function* invokeSetBasicStatus(action: setBasicStatusType) {
	const { status } = action.payload;
	yield put(setStatus.action(status));
}

function* invokeSetSuccessStatus(action: setSuccessStatusType) {
	const { status } = action.payload;
	yield put(setStatus.action(status));
	yield put(setStatus.action(basicStatus.NONE));
}
function* invokeSetWarningStatus(action: setWarningStatusType) {
	const { status } = action.payload;
	yield put(setStatus.action(status));
	yield put(setStatus.action(basicStatus.NONE));
}
function* invokeSetDangerStatus(action: setDangerStatusType) {
	const { status } = action.payload;
	yield put(setStatus.action(status));
	yield put(setStatus.action(basicStatus.NONE));
}

// Bundle api functions to watcher and saga
function* watchAsyncTriggers() {
	yield takeLatest(setBasicStatus.name, invokeSetBasicStatus);
	yield takeLatest(setSuccessStatus.name, invokeSetSuccessStatus);
	yield takeLatest(setWarningStatus.name, invokeSetWarningStatus);
	yield takeLatest(setDangerStatus.name, invokeSetDangerStatus);
}

export default function* saga() {
	yield all([watchAsyncTriggers()]);
}