# react-redux-webpack
零基础搭建React全家桶

### 命令行方式创建文件及文件夹
* 创建文件夹 mkdir aa(文件名)
* windows环境创建文件 type nul> aa.js(文件名)
* linux环境创建文件  touch aa.js(文件名)

### 包管理工具cnpm npm yarn
```
npm 安装，直接去node 官网下载
cnpm 安装，npm install -g cnpm --registry=https://registry.npm.taobao.org
yarn安装，npm install -g yarn
```
* npm install/i wbepack
* cnpm install/i webpack
* yarn add webpack

### 初学者零基础搭建时踩的坑
* 此项目采用webpack 4，建议全局安装webpack、webpack-cli
* react-dom在页面中都没用到，为何还引用呢？由于我们export default导出的组件在渲染时是需要react-dom，相当于执行document.createElement
