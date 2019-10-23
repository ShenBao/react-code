import React from 'react';
import './ToDoListUI.css';

function ToDoListUI (props) {
  const list = props.list.map ((item, index) => (
    <li
      key={index}
      onClick={() => {
        props.onDeleteItemClick (index);
      }}
    >
      {item}
    </li>
  ));
  return (
    <div className="ToDoListUI">
      <h1 className="title">ToDoList</h1>
      <input
        className="input"
        placeholder="Please enter todo info"
        value={props.inputValue}
        onChange={props.onChange}
      />
      <button onClick={props.onBtnClickHandle}>Button</button>
      <ol className="list">
        {list}
      </ol>
    </div>
  );
}

export default ToDoListUI;
