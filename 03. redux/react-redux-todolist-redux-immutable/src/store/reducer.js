
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import { reducer as TodoListReducer } from '../pages/TodoList/store'


const reducer = combineReducers({
    todoList: TodoListReducer,
})

export default reducer;
