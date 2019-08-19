import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root/reducer';
import rootSaga from './root/saga';

export default function configureStore(initialState={}) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);

    return store;
}