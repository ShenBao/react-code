# state-and-lifecycle

`this.state`
```
constructor(props) {
super(props);
this.state = {date: new Date()};
}
```

`this.setState`
```
this.setState({
    date: new Date()
});
```

状态更新可能是异步的

React 可以将多个setState() 调用合并成一个调用来提高性能。

因为 this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。

第二种形式的setState() 来接受一个函数

```
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));


// Correct
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});
```



