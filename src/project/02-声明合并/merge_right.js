// 上述声明的两个接口A会被合并为同一个接口A，同时包含x，y属性
var a1 = {
    x: 1,
    y: 2,
    // 函数重载的匹配顺序是，接口内部同名的函数重载按照书写顺序来匹配，如果是接口外部存在同名函数，
    // 则后面的接口中的同名函数会排在前面被匹配，但是如果函数中存在字符串字面量参数是，这个函数就会排在最前面被匹配
    foo: function (bar) {
        return bar;
    }
};
function Lib() {
}
(function (Lib) {
    Lib.version = '1.0';
})(Lib || (Lib = {}));
// 命名空间和函数进行合并
console.log(Lib.version);
var Cc = /** @class */ (function () {
    function Cc() {
    }
    return Cc;
}());
(function (Cc) {
    Cc.state = 1;
})(Cc || (Cc = {}));
console.log(Cc.state);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
(function (Color) {
    function mix() {
    }
    Color.mix = mix;
})(Color || (Color = {}));
console.log(Color.mix());


export default a