import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import clientAxios from '../client/request';
import serverAxios from '../server/request';

import {reducer as homeReducer} from '../containers/Home/store';

const reducer = combineReducers ({
  home: homeReducer,
});

export const getServerStore = () => {
  return createStore (reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
};

export const getClientStore = () => {
  const defaultState = window.context.state || {};
  return createStore (reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
