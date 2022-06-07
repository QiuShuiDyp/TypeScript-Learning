var Shape;
(function (Shape) {
    var pi = Math.PI;
    // 命名空间中声明的需要export之后才能被外部访问。
    function circle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));
