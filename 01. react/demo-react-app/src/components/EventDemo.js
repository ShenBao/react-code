import React from 'react';

class EventDemo extends React.Component {
  constructor () {
    super ();
    this.state = {
      num: 0,
    };
    this.clickHandler2 = this.clickHandler2.bind (this);
  }

  render () {
    return (
      <div>
        num: {this.state.num}
        <ul>
          <li onClick={this.clickHandler1}>clickHandler1</li>
          <li onClick={this.clickHandler2}>clickHandler2</li>
          <li onClick={this.clickHandler3.bind (this)}>clickHandler3</li>
          <li onClick={this.clickHandler4}>clickHandler4</li>
        </ul>
      </div>
    );
  }

  clickHandler1 () {
    console.log ('clickHandler1:', this);
  }

  clickHandler2 () {
    console.log ('clickHandler2:', this);
    this.setState ({
      num: this.state.num + 1,
    });
  }

  clickHandler3 () {
    console.log ('clickHandler3:', this);
    this.setState ({
      num: this.state.num + 1,
    });
  }

  clickHandler4 = () => {
    console.log ('clickHandler4:', this);
    this.setState ({
      num: this.state.num + 1,
    });
  };
}

export default EventDemo;
