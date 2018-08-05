import React, { Component } from 'react';

import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
    
    
    render() {
        return (
            <div className="App">
                <h1 className="App-title">ToDoList</h1>

                <Input className="input" placeholder="todo info" value={this.props.inputValue} onChange={this.props.onChange} />
                <Button type="primary" onClick={this.props.onBtnClickHandle}>Button</Button>

                <List className="list"
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => { this.props.onDeleteItemClick(index) }}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoListUI;




