/*
 * @Author: QiuShui
 * @Date: 2022-04-06 15:03:53
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-06 15:19:55
 * @FilePath: /TS/build/webpack.base.config.js
 * @Description:
 * webpack公共环境配置
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

const HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, ".dist/js"),
    filename: "app.js",
  },
  // 文件扩展名
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    // ts-loader
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  // 作用：将打包生成的JS嵌入到这个HTML文件中
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/tpl/index.html",
    }),
  ],
}
