///  <reference path="b.ts" />
// 命名空间
var Shape;
(function (Shape) {
    function square(r) {
        return Math.pow(r, 2);
    }
    Shape.square = square;
})(Shape || (Shape = {}));
// 可以通过命名空间名字来引用
console.log(Shape.square(1));
console.log(Shape.circle(2));
