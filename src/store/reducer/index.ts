import { combineReducers } from 'redux';

import entity from '@appReducer/entity';
import util from '@appReducer/util';

const reducer = combineReducers({
	entity,
	util
});

export default reducer;