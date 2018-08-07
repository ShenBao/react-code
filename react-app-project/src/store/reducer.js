
import { combineReducers } from 'redux-immutable';

import { reducer as TodoListReducer } from '../pages/TodoList/store';
import { reducer as TestReducer } from '../pages/Test/store';
import { reducer as loginReducer } from '../pages/login/store';


const reducer = combineReducers({
    todoList: TodoListReducer,
    test: TestReducer,
    login: loginReducer
});

export default reducer;
