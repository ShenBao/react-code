
// import { combineReducers } from 'redux-immutable';
import {combineReducers} from 'redux';

import { reducer as TodoListReducer } from '../pages/todoList/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as registerReducer } from '../pages/register/store';


const reducer = combineReducers({
    login: loginReducer,
    todoList: TodoListReducer,
    register: registerReducer
});

export default reducer;
