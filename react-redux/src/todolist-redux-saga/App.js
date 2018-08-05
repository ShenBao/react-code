import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './style.css';

import store from './store/index'

import {
  getInputChangeAction,
  getAddToDoItemAction,
  getDeleteItemAction,
  getInitListAction
} from './store/actionCreator'

import TodoListUI from './TodoListUI'

class App extends Component {

  constructor(props) {

    super(props);
    this.state = store.getState();
    console.log(store.getState());

    this.storeOnChange = this.storeOnChange.bind(this);
    this.onBtnClickHandle = this.onBtnClickHandle.bind(this);
    this.onDeleteItemClick = this.onDeleteItemClick.bind(this)

    store.subscribe(this.storeOnChange);

  }

  componentDidMount() {
    const action = getInitListAction();
    console.log(action);
    store.dispatch(action)
  }

  storeOnChange() {
    this.setState(store.getState());
  }

  onChange(e) {

    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);

  }

  onBtnClickHandle() {
    const action = getAddToDoItemAction()
    store.dispatch(action);
  }

  onDeleteItemClick(index) {

    const action = getDeleteItemAction(index)
    console.log(index);
    
    store.dispatch(action);

  }

  render() {
    return <TodoListUI inputValue={this.state.inputValue} onChange={this.onChange} onBtnClickHandle={this.onBtnClickHandle} list={this.state.list} onDeleteItemClick={this.onDeleteItemClick}/>
  }
}

export default App;
