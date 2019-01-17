const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
 1.process.env 拿到系统的所有环境变量 process是一个全局对象
  如果自己定义的一个属性，一般我们是拿不到的，在windows环境下就会报错，cross-env来跨平台 的设置和使用环境变量

 2.webpack.DefinePlugin({})的编译时创建一个环境变量，它的生命周期在webpack执行时
 */
module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname,'./src/index.js'),
    output: {
        filename: "[name].[hash].js",
        chunkFilename: '[name].[chunkhash].js',  //hash chunkhash避免了缓存问题，如果文件没有变化，则不用再生成，有变化时改变hash
        path: path.join(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true  //记录缓存
                    }
                }],
                include: path.join(__dirname,'./src'),
                exclude: path.join(__dirname,'node_modules') //排除node_modules
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
                        limit: 8192  //1024*8
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            component: path.join(__dirname, './src/component'),
            pages: path.join(__dirname, './src/pages'),
            router: path.join(__dirname, './src/router'),
            styles: path.join(__dirname,'./src/styles')
        }
    },
    /*注意，该plugin直接做文本替换，指定的值必须包括引号。
     一般来讲，需要使用单引号'"production"'或使用JSON.stringify('production')*/
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VERSION': JSON.stringify('1.0.0')
        }),
        new HtmlWebpackPlugin({
           title: 'hello webpack!',
           template: path.join(__dirname, './src/index.html'),
           filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: [path.join(__dirname, './src'),path.join(__dirname, "dist")],
        compress: true, //一切服务都启用gzip 压缩 （服务端与浏览器端通信）
        port: 8888,
        proxy: {
            "/api": {
                target: "http://localhost:8888",
                pathRewrite: {"^/api" : ""}
            }
        },
        historyApiFallback: true,
        //host: '0.0.0.0',  //外部服务器可访问此项目
        open: true,
        overlay: true //显示报错信息在浏览器端
    }
}
console.log('RUNNING APP VERSION'+process.env.VERSION)
