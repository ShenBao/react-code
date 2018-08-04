import React, { Component } from 'react';
import './style.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      show: true
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let show = this.state.show ? false : true;

    this.setState({
      show
    })

  }

  render() {
    return (
      <div>
          <p className={ this.state.show ? 'show' : 'hide' }> Hello, React !!!</p>
          <button onClick={ this.onClick }>切换</button>
      </div>
    );
  }
}

export default App;
