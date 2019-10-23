### 代码说明
##### WebviewDemo
* 简介：iOS webview源码，用来承载项目页面的webview壳子
* 运行：安装xcode9.4.1 以上，双击 *WebviewDemo.xcodeproj* 即可运行


##### waimaiServer
* 简介：用来托管项目页面的服务器，采用nodejs+express框架编写
* 运行：


1. 安装依赖：
```
npm install
```


2. 启动服务
```
npm run start
```


##### waimai_webapp
* 简介：项目页面逻辑源码
* 运行：


1. 安装依赖：
```
npm install
```


2. dev环境服务启动：
```
npm run dev
```

3. build环境服务启动：
```
npm run build
```
*启动build之后，项目打包过后的文件会自动复制到waimaiServer的public文件下*