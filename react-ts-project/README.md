## react-ts-project

使用react实现一个简单的登陆注册功能
要求：
1. 登陆、注册、成功页面之间有路由跳转
2. 不使用antd等其它的ui框架
3. 使用mock模拟测试数据
4. 要有表单验证和提示
5. (可选)最好使用typescript
6. (可选)最好有单元测试


## 运行项目

- npm i
- npm start
- npm test
- npm run build

依赖：
- react: ^16.4.2
- react-dom: ^16.4.2
- react-redux: ^5.0.7
- redux: ^4.0.0,
- redux-immutable: ^4.0.0
- immutable: ^3.8.2
- react-router: ^4.3.1
- react-router-dom: ^4.3.1
- react-transition-group: ^2.4.0
- redux-thunk: ^2.3.0
- axios: ^0.18.0
- styled-components: ^3.4.1



## SCSS

`npm i -D  sass-loader css-loader style-loader node-sass`

webpack.config.dev.js、webpack.config.prod.js
```js
{
  // 增加对 SCSS 文件的支持
  test: /\.scss/,
  // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
  use: ['style-loader', 'css-loader', 'sass-loader'],
},
```

## source-map

webpack.config.dev.js
```js
devtool: 'cheap-module-eval-source-map',
```

- 在开发环境下把 devtool 设置成 cheap-module-eval-source-map，因为生成这种 Source Map 的速度最快，能加速构建。由于在开发环境下不会做代码压缩，Source Map 中即使没有列信息也不会影响断点调试；
- 在生产环境下把 devtool 设置成 hidden-source-map，意思是生成最详细的 Source Map，但不会把 Source Map 暴露出去。由于在生产环境下会做代码压缩，一个 JavaScript 文件只有一行，所以需要列信息。


## api proxy

package.json
```json
"proxy": {
  "/api": {
    "target": "http://127.0.0.1:8000/",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": "/"
    }
  }
}
```

## console、arrow

```json
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "linterOptions": {
    "exclude": [
      "config/**/*.js",
      "node_modules/**/*.ts",
      "coverage/lcov-report/*.js"
    ]
  },
  "rules": {
    "no-console": [
      false
    ],
    "only-arrow-functions": [
      false
    ],
    "no-undef": [
      false
    ]
  }
}
```

eslint： https://eslint.org/docs/rules/


tsconfig.json
```json
{
  "noUnusedLocals": false,
  "noUnusedParameters": false
}
```





npm install -S redux react-redux @types/react-redux
npm i -S react-router @types/react-router
npm i -S react-router-dom @types/react-router-dom




