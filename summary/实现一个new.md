### 实现一个new

先理清楚new做了什么
1、创建了一个**新对象**（是Object类型的数据）
2、将this指向新对象
3、将创建的对象的原型指向构造函数的原型
4、返回一个对象（如果构造函数本身有返回值且是对象类型，就返回本身的返回值，如果没有才返回新对象）

```javascript
function mynew () {
     // 1、创建一个新对象
     const obj = Object.create({});    // 也可以写成 const obj = {}
     // 2、将this指向该对象
     let Fn = [].shift.call(arguments);    // 把构造函数分离出来
     let returnObj = Fn.apply(obj, arguments);     // 通过apply将this指向由Fn变为obj
     
     // 3、将新对象的原型指向构造函数的原型
     obj.__proto__ = Fn.prototype
     
    // 4、返回对象（如果构造函数有返回对象，那么就返回构造函数的对象，如果没有就返回新对象）
    return Object.prototype.toString.call(returnObj) == '[object Object]' ? returnObj : obj;
}
```

