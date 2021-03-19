/**
 * 缺点：不复制原型链
 * 解释：世界上没有两片一样的叶子
 * @param obj
 * @return {string}
 */
function getOwnClassName(obj) {
  // 0-7: "[object "
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function deepClone(obj) {
  // 习惯用let
  let result;
  let objClassName = getOwnClassName(obj);

  if (objClassName === 'Object') {
    result = {};
  } else if (objClassName === 'Array') {
    result = [];
  } else {
    return obj;
  }

  for (let key in obj) {
    // 不克隆原型链上的属性，只克隆自己身上的属性
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    let copy = obj[key];

    // 自身引用自身，死循环
    if (copy === obj) { continue; }

    let copyClassName = type(copy);
    if (copyClassName === 'Object') {
      result[key] = deepClone(copy);
    } else if (copyClassName === 'Array') {
      result[key] = deepClone(copy);
    } else if (copy !== undefined){
      result[key] = copy;
    }
  }

  return result;
}

const classType = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regExp',
  '[object Object]': 'object',
};

type = function(obj) {
  return (obj === null
    ? String(obj)
    : classType[Object.prototype.toString.call(obj)] || 'object');
};

isWindow = function(obj) {
  return obj && typeof obj === 'object' && 'setTimeout' in obj;
};

isDomNode = function(obj) {
  return 'nodeType' in obj;
};

isArray = Array.isArray || function(obj) {
  return type(obj) === 'array';
};

/**
 * 以下情况不复制
 * 1.对象为 undefined ；
 * 2.转为 String 时不是"[object Object]" ；
 * 3.obj 是一个 DOM 元素；
 * 4.obj 是 window。
 * 5.obj 有构造函数，但不是自己的构造函数，而是通过原型链继承而来的
 * @param obj
 * @return {boolean|boolean}
 */
isPlainObject = function(obj) {
  if (!obj || type(obj) !== 'object' || obj.nodeType || isWindow(obj)) {
    return false;
  }

  let hasOwn = Object.prototype.hasOwnProperty;

  // 如果
  if (obj.constructor && !hasOwn.call(obj, 'constructor')
    && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
    return false;
  }

  let key;
  for (key in obj) {}

  // 检查对象的属性是否都是自身的，遍历对象的属性时，
  // 先从自身属性开始，所以只需要检查最后的属性是否是自身的
  return key === undefined || hasOwn.call(obj, key);
};


deepClone({});

// export { deepClone };
