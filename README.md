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
* webpack-dev-server 编译后的文件都存储在内存，我们看不见，可以删除dist文件打开依然没问题
* 按需加载

### 关于路由小知识

```
route: 一条路由
routes: 一组路由
router: 管理路由的机制，因为routes 只是定义了一组路由，它放在那里是静止的，当真正来了请求，怎么办？ 如果要访问/home，则去找对应的路由，然后显示相应的页面
```


### 此项目为第一版本
