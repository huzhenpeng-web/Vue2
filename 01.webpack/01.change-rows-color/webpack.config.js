const path = require('path')

//导入html-webpack-plugin这个插件
const HtmlPlugin = require('html-webpack-plugin');

//new构造函数 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    //指定要复制哪个页面
    template: './src/index.html',
    //指定要复制出来的文件名和存放路径
    filename: './index.html'
});

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//使用node.js导出语法 向外导出一个webpack的配置现象
module.exports = {
    // devtool: 'eval-source-map', //在开发调式阶段 选择'eval-source-map'
    //实际发布的时候 建议大家把devtool的值设置为nosources-souce-map或直接关闭SourceMap
    devtool: 'nosources-source-map',
    //代表webpack的运行模式 可选值有两个development和production
    //开发时用development 追求打包速度
    //上线时用production
    mode: 'development',
    //entry:'指定要处理哪个文件'
    entry: path.join(__dirname, './src/index.js'), //打包入口文件路径
    //输出文件的存放路径
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js' //生成的文件名
    },
    //插件的数组 将来webpack运行时会加载并调用插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        open: true, //初次打包完成后,自动打开浏览器
        host: '127.0.0.1', //实时打包所使用的主机地址
        //在http协议中 端口号为80可以省略
        port: 80 //端口
    },
    module: {
        rules: [
            //定义了不同模块对应的loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理图片文件的loader 
            //如果需要调用的loader只有一个 只传递一个字符串就可以 多个必须是数组
            //limit用来指定图片的大小 单位是字节 只有<=limit大小的图片 才会被转为base64格式的图片
            //在配置url-loader的时候 多个参数之间 使用&符号进行分隔
            { test: /\.jpg|gif|png$/, use: 'url-loader?limit=1&outputPath=images' },
            //配置babel-loader的时候 只需要把自己的代码进行转换即可 一定要排除node_modules目录的包
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            //@符号表示src目录
            '@': path.join(__dirname, './src/')
        }
    }
}