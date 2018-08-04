import React, { Component, Fragment } from 'react';

class ToDoItem extends Component {

    constructor(props) {
        super(props);

        this.onClickHandle = this.onClickHandle.bind(this);
    }

    onClickHandle() {

        let { onItemDeleteHandle, index } = this.props;

        onItemDeleteHandle(index);

    }

    render() {
        let item = this.props.item;
        return (
            <Fragment>
                <li onClick={this.onClickHandle}>{item}</li>
            </Fragment>
        )
    }
}


export default ToDoItem;
