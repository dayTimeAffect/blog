### js严格模式有什么特点
```javascript
//开发方式
'use strict'
function A(){
    'use strict'
}
```

#### 特点
+ 全局变量必须预先申明
+ 禁止使用with(with可以改变上下文，with会使代码难以阅读，使用不熟练难以定位问题)
+ 创建eval作用域
+ 禁止this指向window
+ 函数参数名不能重复