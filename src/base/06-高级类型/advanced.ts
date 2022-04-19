// 交叉类型：类型的并集，适合对象混入的场景
interface DonInterface {
  run(): void
}

interface CatInterface {
  jump(): void
}

// 交叉类型采用&符号做关联,必须实现交叉的接口方法
let pet: DonInterface & CatInterface = {
  run() {

  },
  jump() {

  }
}

// 联合类型：声明的类型并不确定，可以为多个类型中的一个
let u: number | string
u = 1
u = 'a'
// 字面量的联合类型
let i: 'a' | 'b' | 'c' = 'c'
let c: 1 | 2 | 3 = 2

// 对象的联合类型
class Dog implements DonInterface {
  constructor() {

  }
  run() { }
  eat() { }
}

class Cat implements CatInterface {
  constructor() {

  }
  eat() { }
  jump() { }
}

enum Master { Boy, Girl }
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog() : new Cat()
  pet.eat()  //类的联合类型，只能访问联合类中共有的方法
  // pet.jump() //报错类型“Dog | Cat”上不存在属性“jump”。类型“Dog”上不存在属性“jump”。
  return pet
}

// 可区分的联合类型
interface Square {
  kind: 'square';
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}
interface Circle {
  kind: 'circle'
  r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
  // 通过接口的公用类型属性来创建不同的类型保护区块
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.height * s.width
    case 'circle':
      return Math.PI * s.r ** 2
    default:
      return ((e: never) => { throw new Error(e) })(s)
  }
}

// 索引类型
interface Obj {
  a: number,
  b: string
}
let object: Obj = {
  a: 1,
  b: '2',
}

// keyof T：索引类型查询操作符，对于任何类型T，keyof T的结果为T上已知的公共属性名的联合。
let objKey: keyof Obj;

let value: Obj['a']

function getValue<T, K extends keyof T>(obj: T, keys: K[]) {
  return keys.map(item => obj[item])
}

console.log(getValue(object, ['a', 'b']))
// console.log(getValue(object, ['e']))  //会提示报错

// 映射类型
// 返回一个对象只读属性的新类型
type ReadOnlyObj = Readonly<Obj>
// 返回一个对象可选属性的新类型
type PartialObj = Partial<Obj>
// 抽取子属性返回一个新的类型
type PickObj = Pick<Obj, 'a'>
// 映射
type RecordObj = Record<'x' | 'y', Obj>







