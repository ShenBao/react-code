import React from 'react';
import { connect } from 'react-redux';
import { TodoListBox, Item, Input, Button, Title } from './style';

import { actionCreators } from './store/index';

const TodoList = (props) => {
    const { inputValue, onChangeInput, onBtnClickHandle, list, onDeleteItemClick } = props;
    return (
        <TodoListBox>
            <Title>登录成功</Title>
            <div style={{ textAlign: "center" }}>
                <Input type="text" value={inputValue} onChange={onChangeInput} />
                <Button onClick={onBtnClickHandle}>提交</Button>
            </div>
            <ul>
                {list.map((item, index) => {
                    return <Item
                        key={index}
                        onClick={() => {
                            onDeleteItemClick(index)
                        }}>{item}</Item>
                })
                }
            </ul>
        </TodoListBox>
    )
};

const mapStateToProps = (state) => {
    return {
        inputValue: state.getIn(['todoList', 'inputValue']),
        list: state.getIn(['todoList', 'list'])
    }
}

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
