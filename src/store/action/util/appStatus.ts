import * as status from '@appUtil/appStatus';

const SET_BASIC_STATUS = 'util/appStatus/SET_BASIC_STATUS';
export const setBasicStatus: reduxAction<{ status: status.basicStatus }> = {
	name: SET_BASIC_STATUS,
	action: (status: status.basicStatus) => ({ type: SET_BASIC_STATUS, payload: { status } })
};
export type setBasicStatusType = ReturnType<typeof setBasicStatus.action>;

const SET_SUCCESS_STATUS = 'util/appStatus/SET_SUCCESS_STATUS'; 
export const setSuccessStatus: reduxAction<{ status: status.successStatus }> = {
	name: SET_SUCCESS_STATUS,
	action: (status: status.successStatus) => ({ type: SET_SUCCESS_STATUS, payload: { status } })
};
export type setSuccessStatusType = ReturnType<typeof setSuccessStatus.action>;

const SET_WARNING_STATUS = 'util/appStatus/SET_WARNING_STATUS';
export const setWarningStatus: reduxAction<{ status: status.warningStatus }> = {
	name: SET_WARNING_STATUS,
	action: (status: status.warningStatus) => ({ type: SET_WARNING_STATUS, payload: { status } })
};
export type setWarningStatusType = ReturnType<typeof setWarningStatus.action>;

const SET_DANGER_STATUS = 'util/appStatus/SET_DANGER_STATUS';
export const setDangerStatus: reduxAction<{ status: status.dangerStatus }> = {
	name: SET_DANGER_STATUS,
	action: (status: status.dangerStatus) => ({ type: SET_DANGER_STATUS, payload: { status } })
};
export type setDangerStatusType = ReturnType<typeof setDangerStatus.action>;

// for calling reducers
const SET_STATUS = 'util/appStatus/SET_STATUS';
export const setStatus: reduxAction<{ status: status.statusType }> = {
	name: SET_STATUS,
	action: (status: status.statusType) => ({ type: SET_STATUS, payload: { status } })
};
export type setStatusType = ReturnType<typeof setStatus.action>;