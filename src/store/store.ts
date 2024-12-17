import { legacy_createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

// Initialize Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux Store
export const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run all sagas
sagaMiddleware.run(rootSaga);
