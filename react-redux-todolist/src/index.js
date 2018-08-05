import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store/index';

const App = () => {
    return <Provider store={store}>
        <TodoList />
    </Provider>
};

ReactDOM.render(<App />, document.getElementById('root'));
