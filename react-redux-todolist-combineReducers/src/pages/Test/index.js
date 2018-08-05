import React from 'react';
import { connect } from 'react-redux';

import {
    actionCreators
} from './store/index';


const TodoList = (props) => {
    const { inputValue, onChangeInput } = props;
    return (
        <div>
            <p>这是另一个组件，和上面的不会冲突</p>
            <input type="text" value={inputValue} onChange={onChangeInput} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.test.inputValue,
    }
}

// store.dispatch  props
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput(e) {
            const action = actionCreators.getInputChangeAction(e.target.value);
            console.log(action);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
