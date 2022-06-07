/*
 * @Author: QiuShui
 * @Date: 2022-04-06 20:11:31
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-04-06 21:29:57
 * @FilePath: /TS/src/base/02-接口/interface.ts
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
// 接口声明
interface List {
  readonly id: string;
  name: string;
  age?: number; //可选
  [propName: string]: any;
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((item) => {
    console.log(item.id, item.name);
    // 修改只读属性会报错
    // item.id = '12'
    if (item.age) {
      console.log(item.age);
    }
  });
}

let result = {
  data: [
    // sex并非interface中的属性，但是满足List的属性匹配，因此也不会报错
    { id: "1", name: "A", sex: "male" },
    { id: "12", name: "B", age: 10 },
  ],
};

render(result);
// 通过类型断言可以解决TS认为sex不在目标类型范围内的问题
render({
  data: [
    { id: "1", name: "A", sex: "male" },
    { id: "12", name: "B", age: 10 },
  ],
});

interface StringArray {
  [index: number]: string;
}

let chars: StringArray = ["A", "B"];

interface Names {
  [z: number]: number; //数字索引类型的返回值要是字符索引类型签名的
}

let names: Names = [1, 2, 3];

interface Mixin {
  [index: string]: string;
  [z: number]: string; //数字索引类型的返回值要是字符索引类型签名的类型，因为js存在类型隐式转换，number类型会转换成string类型
}

// interface Add {
//   (x: number, y: number): number
// }

// let add: Add = (a, b) => a + b

type Add = (x: number, y: number) => number;
let add: Add = (x, y) => x + y;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
function getLib() {
  let lib = (() => {}) as Lib;
  lib.version = "1.0";
  lib.doSomething();
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
lib2.doSomething();
