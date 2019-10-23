// import tabReducer from './tabReducer.js';
// import categoryReducer from './categoryReducer.js';
import contentListReducer from './contentListReducer.js';
import headerReducer from './headerReducer.js';
import scrollViewReducer from 'component/ScrollView/scrollViewReducer.js';

import { combineReducers } from 'redux';


const reducers = combineReducers({
    scrollViewReducer,
    headerReducer,
    contentListReducer
});


export default reducers;