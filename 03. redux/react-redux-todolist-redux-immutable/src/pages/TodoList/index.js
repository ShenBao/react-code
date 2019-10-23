import React from 'react';
import { connect } from 'react-redux';

import {
    actionCreators
} from './store/index';


const TodoList = (props) => {
    const { inputValue, onChangeInput, onBtnClickHandle, list, onDeleteItemClick } = props;
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChangeInput} />
            <button onClick={onBtnClickHandle}>提交</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={() => { onDeleteItemClick(index) }}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    // return {
    //     inputValue: state.get('todoList').get('inputValue'),
    //     list: state.get('todoList').get('list')
    // }
    return {
        inputValue: state.getIn(['todoList', 'inputValue']),
        list: state.getIn(['todoList', 'list'])
    }
}

// store.dispatch  props
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput(e) {
            const action = actionCreators.getInputChangeAction(e.target.value);
            console.log(action);
            dispatch(action);
        },
        onBtnClickHandle(e) {
            const action = actionCreators.getAddToDoItemAction();
            console.log(action);
            dispatch(action);
        },
        onDeleteItemClick(index) {
            const action = actionCreators.getDeleteItemAction(index);
            console.log(action);
            dispatch(action);

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
