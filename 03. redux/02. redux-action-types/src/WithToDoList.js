import React, {Component} from 'react';

import ToDoListUI from './TodoListUI';

import store from './store/index';

import {CHNAGE_INPUT_VALUE,
  ADD_TODO_ITEM ,
  DELETE_TODO_ITEM ,} from './store/actionTypes'

class WithToDoList extends Component {
  constructor (props) {
    super (props);
    this.state = store.getState ();

    this.storeOnChange = this.storeOnChange.bind (this);
    this.onBtnClickHandle = this.onBtnClickHandle.bind (this);
    this.onDeleteItemClick = this.onDeleteItemClick.bind (this);
    store.subscribe (this.storeOnChange);
  }

  storeOnChange () {
    this.setState (store.getState ());
  }

  onChange (e) {
    const action = {
      type: CHNAGE_INPUT_VALUE,
      value: e.target.value,
    };
    store.dispatch (action);
  }

  onBtnClickHandle () {
    if (!this.state.inputValue) {
      return;
    }
    const action = {
      type: ADD_TODO_ITEM,
    };
    store.dispatch (action);
  }

  onDeleteItemClick (index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index,
    };
    store.dispatch (action);
  }

  render () {
    return (
      <ToDoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        onChange={this.onChange}
        onBtnClickHandle={this.onBtnClickHandle}
        onDeleteItemClick={this.onDeleteItemClick}
      />
    );
  }
}

export default WithToDoList;
