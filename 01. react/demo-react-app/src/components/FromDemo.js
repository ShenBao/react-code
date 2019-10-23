import React from 'react';

class FromDemo extends React.Component {
  constructor () {
    super ();
    this.state = {
      name: 'Shen Bao',
      gender: 'male',
      info: 'info',
      city: 'beijing'
    };
  }

  render () {
    return (
      <div>
        <p>{this.state.name}</p>
        <div>
          <label htmlFor="name">name:</label>
          <input id="name" value={this.state.name} 
            onChange={this.onChangeName}
          />
        </div>
        <div>
          <label htmlFor="info">info:</label>
          <textarea id="info" value={this.state.info} 
            onChange={this.onChangeInfo}
          />
        </div>
        <div>
          <label htmlFor="city">city:</label>
          <select value={this.state.city} 
            onChange={this.onChangeCity}>
            <option value='beijing'>beijing</option>
            <option value='shanghai'>shanghai</option>
            <option value='nanjing'>nanjing</option>
          </select>
        </div>
      </div>
    );
  }

  onChangeName = (e)=> {
    this.setState({
      name: e.target.value
    })
  }

  onChangeInfo = (e)=> {
    this.setState({
      info: e.target.value
    })
  }

  onChangeCity = (e)=> {
    this.setState({
      city: e.target.value
    })
  }
}

export default FromDemo;
