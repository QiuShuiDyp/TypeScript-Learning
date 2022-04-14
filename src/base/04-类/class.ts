/*
 * @Author: QiuShui
 * @Date: 2022-04-07 12:21:19
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-07 19:21:28
 * @FilePath: /TS/src/base/04-类/class.ts
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
class Dog {
  constructor(public name: string) {
    // 实例属性必须初始化
    this.name = name
  }
  // 共有属性
  type?: string //可选属性，不必初始化
  run() {}
}
console.log(Dog.prototype)

class Husky extends Dog {
  constructor(name: string, color: string) {
    // 派生类构造函数必须有super的调用，并且需要在调用this之前调用
    super(name)
    this.color = color
  }
  private color: string
  getColor(){
    console.log(this.color)
  }
}

let dog:Husky = new Husky('dog', 'white')
dog.getColor()
dog.name



