interface A {
  x: number
  y: number
  // 声明一个同名属性时，需要注意必须是相同的属性名和类型，否则会报错
  // y:string
  foo(bar: number): number //5
  foo(bar: 'b'): number //2
}

interface A {
  y: number
  foo(bar: string): string //4
  foo(bar: string[]): string[] //3
  foo(bar: 'a'): number  //1
}

// 上述声明的两个接口A会被合并为同一个接口A，同时包含x，y属性
let a1: A = {
  x: 1,
  y: 2,
  // 函数重载的匹配顺序是，接口内部同名的函数重载按照书写顺序来匹配，如果是接口外部存在同名函数，
  // 则后面的接口中的同名函数会排在前面被匹配，但是如果函数中存在字符串字面量参数是，这个函数就会排在最前面被匹配
  foo(bar: any) {
    return bar
  }
}
// 函数或者类 与 命名空间 的声明合并，都必须比命名空间更先声明
function Lib() {

}

namespace Lib {
  export let version = '1.0'
}



// 命名空间和函数进行合并
console.log(Lib.version)

class Cc { }
namespace Cc {
  export let state = 1
}



console.log(Cc.state)

enum Color {
  Red,
  Yellow,
  Blue
}
namespace Color {
  export function mix() {

  }
}

console.log(Color.mix())