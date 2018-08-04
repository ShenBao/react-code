# 组件 & Props

函数定义/类定义组件
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

你也可以使用 ES6 class 来定义一个组件:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```


## 组合组件
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

## 提取组件

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

## Props的只读性

无论是使用函数或是类来声明一个组件，它决不能修改它自己的props。
```
function sum(a, b) {
  return a + b;
}
```
`所有的React组件必须像纯函数那样使用它们的props。`
