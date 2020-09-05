import { combineReducers } from 'redux';

import appStatus from '@appReducer/util/appStatus';
import filter from '@appReducer/util/filter';
import modal from '@appReducer/util/modal';

const reducer = combineReducers({
	appStatus,
	filter,
	modal
});

export default reducer;