### instanceof的原理与简单实现
instanceof常用于判断一个实例是否在某个类的原型上的任何位置，返回值为一个布尔值

所以实现的原理就是判断对象的<code>__proto__</code>是否等于构造函数的<code>prototype</code>，如果不等于，则会继续在对象的原型链上寻找，,直到顶层，返回最终的布尔值

```javascript
const myInstanceOf = (obj, fun) => {
    let funPro = fun.prototype;
    let objPro = obj.__proto__;

    while(objPro){
        if(objPro === funPro){
            return true;
        }
        // 当前原型对象不符合，则继续再原型对象的原型上继续查找
        objPro = objPro.__proto__
    }
    return false;
}
```