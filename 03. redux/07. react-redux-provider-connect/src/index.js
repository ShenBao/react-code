import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import WithToDoList from './WithToDoList';

import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <WithToDoList />
    </Provider>
  );
};

ReactDOM.render (<App />, document.getElementById ('root'));
