/*
 * @Author: QiuShui
 * @Date: 2022-04-06 15:04:14
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-06 15:17:11
 * @FilePath: /TS/build/webpack.config.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base.config")
const devConfig = require("./webpack.dev.config")
const proConfig = require("./webpack.pro.config")

module.exports = (env, argv) => {
  let config = argv.mode === "development" ? devConfig : proConfig
  return merge(baseConfig, config)
}
