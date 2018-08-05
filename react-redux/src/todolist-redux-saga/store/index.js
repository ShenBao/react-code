import { createStore, applyMiddleware  } from "redux";

import createSagaMiddleware from 'redux-saga'

import reducer from "./reducer"

import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga)

export default store;
