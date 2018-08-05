import React, { Component } from 'react';

import store from './store/index';

import { connect } from 'react-redux'

// const TodoList = (props) => {
//     const { inputValue, onChangeInput, onBtnClickHandle, list } = props;
//     return (
//         <div>
//             <input type="text" value={inputValue} onChange={onChangeInput} />
//             <button onClick={onBtnClickHandle}>提交</button>
//             <ul>
//                 {
//                     list.map((item, index) => {
//                         return <li key={index}>{item}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }


class TodoList extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         // ...
    //     }

    // }

    render() {
        const { inputValue, onChangeInput, onBtnClickHandle, list, onDeleteItemClick } = this.props;
        return (
            <div>
                <input type="text" value={inputValue} onChange={onChangeInput} />
                <button onClick={onBtnClickHandle}>提交</button>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index} onClick={() => { onDeleteItemClick(index) }} >{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch  props
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        onBtnClickHandle(e) {
            const action = {
                type: 'add_todo_item',
            }
            dispatch(action);
        },
        onDeleteItemClick(index) {
            const action = {
                type: 'delete_todo_item',
                index
            }
            store.dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
