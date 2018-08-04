# 深入 JSX




React.createElement(component, props, ...children) 

```
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```
编译为：
```
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)

```

## React 必须声明

```
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // 返回 React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```

## 点表示法

```
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

## 首字母大写

```
import React from 'react';

// 正确！组件名应该首字母大写:
function Hello(props) {
  // 正确！div 是有效的 HTML 标签:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 正确！React 能够将大写开头的标签名认为是 React 组件。
  return <Hello toWhat="World" />;
}
```


## 在运行时选择类型


```
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 正确！JSX 标签名可以为大写开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```


## `属性`

```

使用 JavaScript 表达式

<MyComponent foo={1 + 2 + 3 + 4} />

function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}

字符串常量

<MyComponent message="hello world" />

<MyComponent message={'hello world'} />

<MyComponent message="&lt;3" />

<MyComponent message={'<3'} />

默认为 True

<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />

扩展属性

function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

```


## 子代


字符串常量

JSX

Js表达式

函数

布尔值、Null 和 Undefined 被忽略#

```
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```








