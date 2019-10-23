import { createStore,applyMiddleware } from 'redux';

import mainReducer from './reducers/main.js';

import thunk from 'redux-thunk';

import createHistory from 'history/createHashHistory'

import { routerMiddleware } from 'react-router-redux'

// 创建基于hash的history
const history = createHistory();

// 创建初始化tab
history.replace('home');

// 创建history的Middleware
const historyMiddl = routerMiddleware(history);

const store = createStore(mainReducer, applyMiddleware(thunk,historyMiddl));


if (module.hot) {
    module.hot.accept('./reducers/main', ()=>{
        const nextRootReducer = require('./reducers/main.js').default;
        store.replaceReducer(nextRootReducer)
    });
}
module.exports = {
    store,
    history
}
