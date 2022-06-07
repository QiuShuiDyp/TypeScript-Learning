namespace Shape {
  const pi = Math.PI
  // 命名空间中声明的需要export之后才能被外部访问。
  export function circle(r: number) {
    return pi * r ** 2
  }
}