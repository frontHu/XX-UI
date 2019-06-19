const path = require('path');

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: path.resolve(__dirname, 'examples/main.js'), // page 的入口
      template: path.resolve(__dirname, 'examples/public/index.html'), //模板来源
      filename: 'index.html' //在 dist/index.html 的输出
    }
  },
 
  
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(ttf|eot|svg|woff2?)(\?\S*)$/,
          loader: 'url-loader'
        }
      ]
    }
  }
  //是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  // 扩展 webpack 配置，使 packages 加入编译
  // chainWebpack: config => {
  //   config.module
  //     .rule('js')
  //     .include
  //     .add('packages')
  //     .end()
  //     .use('babel')
  //     .loader('babel-loader')
  //     .tap(options => {
  //       return options // 修改它的选项...
  //     })
  // }
}