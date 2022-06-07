///  <reference path="b.ts" />
// 命名空间
namespace Shape {
  // 命名空间中的函数不可重复定义
  export function  square(r: number) {
    return r ** 2
  }
}

// 可以通过命名空间名字来引用
console.log(Shape.square(1))
console.log(Shape.circle(2))