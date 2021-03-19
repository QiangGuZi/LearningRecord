if (!Function.prototype.bind) {
  Function.prototype.bind = function(obj) {
    // let是es6的语法，用习惯了就不用var了
    let funcToBind = this;

    // actually，怎么可能调用方不是函数呢？
    if (typeof funcToBind !== 'function') {
      throw new TypeError('xxx');
    }

    // 支持绑定可变变量～即柯里化～
    let bindArgs = Array.prototype.slice.call(arguments, 1);

    let funcBound = function() {
      let restArgs = Array.prototype.slice.call(arguments);

      return (
        // this instanceof funcBound === true: 返回的funcBound被当成构造函数，使用new进行调用
        // 没有这一步判断的话，new后，funToBind的this指向的还是原指定的obj，而不是new过程中新构建的对象
        funcToBind.apply(this instanceof funcBound
          ? this
          : obj
          , bindArgs.concat(restArgs))
      );
    };

    // 用new实例化后，修改 ._proto_对象的属性时，原函数的prototype也会一起修改。
    // funcBound.prototype = funcToBind.prototype;

    // 正常来说实例话修改_proto_是等同于修改构造函数的原型，但如果不想这样的话可以用如下方法
    // 中间套一层_proto_作为中介（缓冲），每个实例化对象的 ._proto_._proto_ 才是 funcToBind.prototype
    // 修改 _proto_ 则不会影响原函数的原型了，但修改 _proto_._proto_ 就还是会修改原函数的原型
    // 原型 即 prototype
    let funcNOP = function() {};
    funcNOP.prototype = funcToBind.prototype;

    funcBound.prototype = new funcNOP();

    return funcBound;
  };
}


