import React from 'react';

class EventDemo2 extends React.Component {
  // constructor () {
  //   super ();
  // }

  render () {
    return (
      <div>
        <a href={'https://www.baidu.com/'} onClick={this.clickHandler}>
          clickHandler
        </a>
        <div onClick={this.clickHandler1.bind(this, '这个传的参数')}>带参数的事件1</div>
        <div onClick={(event)=>{this.clickHandler2('这个传的参数', event)}}>带参数的事件2</div>
      </div>
    );
  }

  clickHandler = event => {
    // 阻止默认行为
    event.preventDefault ();
    // 阻止冒泡
    event.stopPropagation ();
    // 指向当前元素、即当前元素触发
    console.log ('target:', event.target);
    // 指向当前元素，假象！！！
    console.log ('currentTarget:', event.currentTarget);
    // event 其实是React封装的。可以看__proto__.constructor 是 SyntheticEvent； SyntheticEvent不是原生的 event，原生的是 MouseEvent
    console.log ('event:', event);
    console.log ('event.__proto__.constructor:', event.__proto__.constructor);

    // 原生对象
    console.log ('nativeEvent:', event.nativeEvent);
    // 指向当前元素、即当前元素触发
    console.log ('nativeEvent target:', event.nativeEvent.target);
    // 指向 document !!!
    console.log ('nativeEvent currentTarget:', event.nativeEvent.currentTarget);

    // 总结：
    // event 是 SyntheticEvent，模拟出来 DOM 事件所有能力
    // event.nativeEvent 是原生对象
    // 所有的事件都被挂载到 document 上
    // 和 DOM 事件不一样，和 Vue 事件也不一样
  }

  clickHandler1 (p, event){
    console.log('p:', p);
    console.log ('event:', event);
  }

  clickHandler2 = (p, event)=>{
    console.log('p:', p);
    console.log ('event:', event);
  }
}

export default EventDemo2;
