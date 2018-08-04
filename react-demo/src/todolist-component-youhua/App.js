import React, { Component, Fragment } from 'react';

import ToDoItem from './ToDoItem';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      inputValue: 'Hello React !!!',
      list: [
        'React',
        'Vue'
      ]
    };

    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onEnterHandle = this.onEnterHandle.bind(this);
    this.onBtnClickHandle = this.onBtnClickHandle.bind(this);
    this.onItemDeleteHandle = this.onItemDeleteHandle.bind(this);

  }

  onChangeHandle(e) {

    let val = e.target.value
    console.log(val);

    // this.setState({
    //   inputValue: val
    // });

    // 16之后
    this.setState(() => ({
      inputValue: val
    }));

  }

  onItemDeleteHandle(index) {

    console.log(index);

    // Immutable
    // state 不允许我们做任何改变

    // let list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list
    // });

    // 16之后
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    });

  }

  onBtnClickHandle() {

    // this.setState({
    //   list: [...this.state.list, this.state.inputValue]
    // });
    
    // 16之后
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));

  }

  onEnterHandle(e) {

    if (e.which !== 13) {
      return;
    }
    this.onBtnClickHandle();

  }

  getToDoItem() {
    return this.state.list.map((item, index) => {
      return <ToDoItem
        key={index}
        index={index}
        item={item}
        onItemDeleteHandle={this.onItemDeleteHandle} />
    })
  }

  render() {
    return (
      <Fragment>
        <h1>ToDoList</h1>

        <label htmlFor="ToDoList">请输入</label>
        <input id="ToDoList" type="text" value={this.state.inputValue}
          onChange={this.onChangeHandle}
          onKeyPress={this.onEnterHandle}
        />
        <button onClick={this.onBtnClickHandle}>提交</button>
        <ul>
          {this.getToDoItem()}
        </ul>
      </Fragment>
    );
  }
}

export default App;
