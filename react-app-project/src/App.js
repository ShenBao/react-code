import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';

import TodoList from './pages/todoList/index';
import Login from './pages/login/index';
import Register from './pages/register/index';


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      	<BrowserRouter>
      		<div>
      			<Route path='/' exact component={Login}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/register' exact component={Register}></Route>
            <Route path='/todolist' exact component={TodoList}></Route>
            {/* <Route path='*' exact component={Login}></Route> */}
      		</div>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default App;
