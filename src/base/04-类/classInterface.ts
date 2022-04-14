/*
 * @Author: QiuShui
 * @Date: 2022-04-08 08:41:43
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-08 08:59:02
 * @FilePath: /TS/src/base/04-类/classInterface.ts
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
interface Human {
  name: string
  eat(): void
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
}

// 接口可以被继承
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}
// 继承多个接口
interface Boy extends Man, Child {}

// 接口类型的变量需要实现接口中的属性和方法
let boy: Boy = {
  name: "",
  eat() {},
  run() {},
  cry() {},
}

class Auto {
  state = 1
  // private state2 = 0
}
interface AutoInterface extends Auto {}

// C不是auto的子类，因此不能包含非公有成员
class C implements AutoInterface {
  state = 1
}

// 接口抽离类属性的时候，不仅抽离了公共成员，也抽离了私有成员
class Bus extends Auto implements AutoInterface{
  
}
