/*
 * @Author: QiuShui
 * @Date: 2022-04-06 16:04:30
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-07 12:42:55
 * @FilePath: /TS/src/base/01-基本类型/baseType.ts
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
// 基本类型
let bool: boolean = true
let num: number = 123
let str: string = "zhangsan"
// 下面的跨类型赋值会提示不能将类型“number”分配给类型“string
// str = 123

let symbol: symbol = Symbol()

let nu: null = null
let un: undefined = undefined
// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

// 元组
let tuple: [number, string] = [0, "1"]
// 元组可以使用数组的方法去新增元素，但是不能真正访问
// tuple.push(3)
// tuple[3]  //会提示tuple长度为2
// 需要按类型的顺序赋值，否则报错，就像下面这样
// let tuple: [number, string] = ["1", 0]

// any
let a: any = 123
a = "123"
// any作为不同类型元素的数组
let list: any[] = [1, true, "free"]

// 对象
let obj: { x: string; y: string } = { x: "1", y: "2" }
obj.x = "123"

// 函数
let func1 = (x: number, y: number) => x + y
let func2: (x: number, y: number) => number
func2 = (a, b) => a + b

// 枚举
enum Direction {
  Up, //值为0，后面声明的以此递增+1
  Right, //值为1
  Down, //值为2
  Left, //值为3
}

console.log(Direction.Up) //输出0

enum Char {
  // const成员，会在编译的时候计算结果，并以常量的形式出现在运行环境
  a,
  b = Char.a,
  c = 1 + 3,
  // computed成员，编译的时候会保留计算表达式，只有在运行的时候才会被计算
  d = "123".length,
  // computed成员后面声明的成员必须初始化，否则报错
  f = 123,
}
// 常量枚举
const enum Mouth {
  Jan,
  Feb,
  Mar,
}
enum E {
  a = 'apple',
  b = 'banna',
}
let e: E.a = E.a

