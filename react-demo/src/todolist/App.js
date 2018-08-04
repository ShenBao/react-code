import React, { Component, Fragment } from 'react';

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

  }

  onChangeHandle(e) {

    let val = e.target.value
    console.log(val);

    this.setState({
      inputValue: val
    });

  }

  onItemDeleteHandle(index) {

    console.log(index);

    // Immutable
    // state 不允许我们做任何改变

    let list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    });

  }

  onBtnClickHandle() {

    this.setState({
      list: [...this.state.list, this.state.inputValue]
    });

  }

  onEnterHandle(e) {

    if (e.which !== 13) {
      return;
    }

    this.onBtnClickHandle();
  }

  render() {
    return (
      <Fragment>
        <h1>ToDoList</h1>

        <label htmlFor="ToDoList">请输入</label>
        <input id="ToDoList" type="text" value={this.state.inputValue}
          onChange={this.onChangeHandle.bind(this)}
          onKeyPress={this.onEnterHandle.bind(this)}
        />
        <button onClick={this.onBtnClickHandle.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li 
                  key={index} 
                  onClick={ this.onItemDeleteHandle.bind(this, index) 
                }>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default App;
