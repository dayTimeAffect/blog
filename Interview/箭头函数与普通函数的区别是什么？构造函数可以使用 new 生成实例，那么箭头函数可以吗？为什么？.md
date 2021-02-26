### 箭头函数与普通函数的区别是什么？构造函数可以使用 new 生成实例，那么箭头函数可以吗？为什么？

箭头函数是普通函数的简写，可以更优雅的定义一个函数，但是和普通函数还是有所区别的。

+ 箭头函数内的this是定义时所在的对象，而不是使用时所在的对象，所以它是没用自己的this的，因此无法使用call/apply/bind
+ 不可以使用arguments， 该对象在箭头函数体内同样不存在
+ 也没有prototype属性



因为没用自己的this对象与prototype属性，所以，无法使用new来实例化对象

>new的时候大致做了：
>
>```javascript
>function _new(){
>  // 1、创建一个新对象
>  let target = {};
>  let [constructor, ...args] = [...arguments];  // 第一个参数是构造函数
>  // 2、原型链连接
>  target.__proto__ = constructor.prototype;
>  // 3、将构造函数的属性和方法添加到这个新的空对象上。
>  let result = constructor.apply(target, args);
>  if(result && (typeof result == "object" || typeof result == "function")){
>    // 如果构造函数返回的结果是一个对象，就返回这个对象
>    return result
>  }
>  // 如果构造函数返回的不是一个对象，就返回创建的新对象。
>  return target
>}
>```
>
>

