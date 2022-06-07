// 全局的声明文件，下面的函数和命名空间会进行合并
declare function globalLib(options: globalLib.Options): void

declare namespace globalLib {
  const version: string;
  function doSomething(): void
  interface Options {
    [key: string]: any
  }
}