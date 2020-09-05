import { handleActions } from 'redux-actions';

import { setStatus } from '@appAction/util/appStatus';

import { basicStatus, statusType } from '@appUtil/appStatus';

interface AppStatusState {
  status: statusType
}
const initialState: AppStatusState = { status: basicStatus.NONE };

const functions = {
	setStatus: (state: AppStatusState, payload: { status: statusType }): AppStatusState => ({
		...state,
		status: payload.status
	})
};

export default handleActions({ [setStatus.name]: (state: AppStatusState, action) => functions.setStatus(state, action.payload) }, initialState);