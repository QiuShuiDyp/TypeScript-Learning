/*
 * @Author: QiuShui
 * @Date: 2022-04-06 21:41:31
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-06 21:50:48
 * @FilePath: /TS/src/base/03-函数/function.ts
 * @Description:
 *  说明TS类型在函数定义中的使用以及函数重载等场景
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
//函数定义
function add1(x: number, y: number) {
  return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
  (x: number, y: number): number
}
// 只能传入指定参数个数的值，传多了会报错
// add1(1, 2, 3)

// 函数可选参数
function add5(x: number, y?: number) {
  return y ? x + y : x
}

function add6(x: number, y = 0, z: number, q = 1) {
  console.log(x, y, z, q) //1 0 3 1
  return x + y + z + q
}
add6(1, undefined, 3)

function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
add7(1, 2, 3, 4, 5)

// 函数重载：函数名相同，但是入参的类型或者个数不一样
function add8(...rest: number[]): number
function add8(...rest: string[]): string
function add8(...rest: any) {
  if (typeof rest[0] === "string") {
    return rest.join()
  } else if (typeof rest[0] === "number") {
    return rest.reduce((pre: number, cur: number) => pre + cur)
  }
}
console.log(add8(1, 2))
console.log(add8("a", "b", "c"))
