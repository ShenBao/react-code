import React, { Component } from 'react';

class UndoList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { list, deleteItem } = this.props;
        return (
            <div>
                <div data-test="count">{list.length}</div>
                <ul className="undo-list">
                    {
                        list.map((item, index) => {
                            return (
                                <li
                                    data-test="list-item"
                                    className="list-item"
                                    key={`${index}-${item}`}>
                                    {item}
                                    <span
                                        data-test="delete-item"
                                        className="delete-item"
                                        onClick={(e) => {
                                            e && e.stopPropagation();
                                            deleteItem(index);
                                        }}
                                    >-</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UndoList;
