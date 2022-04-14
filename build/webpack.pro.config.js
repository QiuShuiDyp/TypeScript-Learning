/*
 * @Author: QiuShui
 * @Date: 2022-04-06 15:05:01
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-06 15:12:31
 * @FilePath: /TS/src/build/webpack.pro.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 自动清空webpack打包后的文件
    plugins: [
        new CleanWebpackPlugin()
    ]
}
