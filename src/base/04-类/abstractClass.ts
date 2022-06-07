/*
 * @Author: QiuShui
 * @Date: 2022-04-07 19:24:48
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-07 19:52:28
 * @FilePath: /TS/src/base/04-类/abstractClass.ts
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
// abstract声明抽象类
// abstract class Animal {
//   eat() {
//     console.log("eat")
//   }
//   // 抽象方法
//   abstract sleep(): void
// }

// class Cat extends Animal {
//   constructor(name: string) {
//     super()
//     this.name = name
//   }
//   name: string
//   run() {}
//   sleep(): void {
//     console.log("cat sleep")
//   }
// }

// let cat = new Cat("Monkey")
// cat.eat()
// cat.sleep()

// // 多态继承
// class Monky extends Animal{
//   sleep(): void {
//     console.log('Monky sleep')
//   }
// }

// let monky = new Monky()
// let animals:Animal[] = [cat, monky]
// animals.forEach(item=>item.sleep())