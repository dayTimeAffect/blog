### 实现bind函数

先弄清楚bind做了什么，有什么特点：
+ bind 的第一个参数会作为原函数运行时的 this 指向
+ bind() 方法会创建一个新函数,并且不会默认调用
+ 绑定时的预设参数（柯里化）
+ 当使用 new 操作符调用绑定函数时，bind 的第一个参数无效
```javascript
Function.prototype.mybind = function (context, ...rest) {
    if(typeof this !== 'function'){
        throw new TypeError('被绑定的对象需要是函数')
    }
    //保存绑定时的指针指向
    const self = this
    //创建一个新的函数准备返回
    const func = function (){
        //判断是否是new调用，如果不是，正常修改指针指向指向
        //如果是new调用，此时this是一个__proto__ === self.prototype的空对象，具体参考如何实现一个new
        //如果是new调用，那么忽略bind
        //第二个参数实现柯里化
        return self.apply(this instanceof self ? this : context, [...rest, ...arguments])
    }
    func.prototype = Object.create(self.prototype)
    return func
}
```
