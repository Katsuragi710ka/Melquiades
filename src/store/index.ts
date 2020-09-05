import { applyMiddleware, compose, createStore } from 'redux';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from '@appReducer/index';
import rootSaga from '@appSaga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

export default store;