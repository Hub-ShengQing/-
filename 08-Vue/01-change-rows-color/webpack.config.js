// 3. 配置 html-webpack-plugin

// 3.1 导入 HTML 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin');

// 3.2 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',   // 指定需要复制的页面
    filename: './index.html'    // 指定粘贴的文件名和地址
});

// 1. 默认约定的打包入口与出口
// // 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
    // 代表 webpack 运行的模式，可选值：development、production
    mode: 'development',
    // 通过 plugins 节点，使 HTML 插件生效
    plugins: [htmlPlugin],
    // 4. 通过 devServer 节点配置 html-webpack-plugin
    devServer: {
        open: true,
        port: 8080,
        // 指定运行的主机地址
        host: '127.0.0.1'
    }
}

/* // 2. 自定义的打包入口与出口
const path = require("path");

module.exports = {
    mode: 'development',
    // entry 指定打包入口
    entry: path.join(__dirname, "./src/index_copy.js"),
    // output 指定打包出口
    output: {
        path: path.join(__dirname, "dist"),
        filename: "newMain.js"
    }
} */

