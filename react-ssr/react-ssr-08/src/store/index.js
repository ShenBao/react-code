import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import clientAxios from '../client/request';
import serverAxios from '../server/request';

import {reducer as headerReducer} from '../components/Header/store';
import {reducer as homeReducer} from '../containers/Home/store';
import {reducer as listReducer} from '../containers/List/store';

const reducer = combineReducers ({
  header: headerReducer,
  home: homeReducer,
  list: listReducer,
});

export const getServerStore = (req) => {
  return createStore (reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
};

export const getClientStore = () => {
  const defaultState = window.context.state || {};
  return createStore (reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
