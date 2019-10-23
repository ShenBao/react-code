import React, {Component} from 'react';

import ToDoListUI from './TodoListUI';

import store from './store/index';

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
      type: 'change_input_value',
      value: e.target.value,
    };
    store.dispatch (action);
  }

  onBtnClickHandle () {
    if (!this.state.inputValue) {
      return;
    }
    const action = {
      type: 'add_todo_item',
    };
    store.dispatch (action);
  }

  onDeleteItemClick (index) {
    const action = {
      type: 'delete_todo_item',
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
