import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './style.css';

import { Input, Button, List } from 'antd';

import store from './store/index'

import {CHNAGE_INPUT_VALUE,
  ADD_TODO_ITEM ,
  DELETE_TODO_ITEM ,} from './store/actionTypes'


class App extends Component {

  constructor(props) {

    super(props);
    this.state = store.getState();
    console.log(store.getState());

    this.storeOnChange = this.storeOnChange.bind(this);
    this.onBtnClickHandle = this.onBtnClickHandle.bind(this);
    // this.onDeleteItemClick = this.onDeleteItemClick.bind(this)

    store.subscribe(this.storeOnChange);

  }

  storeOnChange() {
    this.setState(store.getState());
  }


  onChange(e) {
    const action = {
      type: CHNAGE_INPUT_VALUE,
      value: e.target.value
    }

    store.dispatch(action);

  }

  onBtnClickHandle() {
    const action = {
      type: ADD_TODO_ITEM,
    }

    store.dispatch(action);
  }

  onDeleteItemClick(index) {

    console.log(index);

    const action = {
      type: DELETE_TODO_ITEM,
      index
    }

    store.dispatch(action);

  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">ToDoList</h1>

        <Input className="input" placeholder="todo info" value={this.state.inputValue} onChange={this.onChange} />
        <Button type="primary" onClick={this.onBtnClickHandle}>Button</Button>

        <List className="list"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.onDeleteItemClick.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    );
  }
}

export default App;
