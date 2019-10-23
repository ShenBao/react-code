import React, { Component } from 'react';

import Header from './components/Header';

import UndoList from './components/UndoList';

class ToDolist extends Component {

    constructor(props) {
        super(props);
        this.addUndoItem = this.addUndoItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            undoList: [],
        };
    }

    addUndoItem(value) {
        this.setState({
            undoList: [...this.state.undoList, value]
        })
    }

    deleteItem(index) {
        const newList = [...this.state.undoList];
        newList.splice(index, 1);
        this.setState({
            undoList: newList
        });
    }

    render() {
        const { undoList } = this.state;
        return <div>
            <Header addUndoItem={this.addUndoItem} />
            <UndoList
                list={undoList}
                deleteItem={this.deleteItem}
            />
        </div>
    }
}

export default ToDolist;
