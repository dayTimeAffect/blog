# JS中的iterator（迭代器）
迭代器模式：一种设计模式，用于统一迭代过程。把拥有 Iterable 接口的数据结构称为可迭代对象（iterable），而且可以通过迭代器 Iterator 消费。

+ 任何实现 Iterable 接口的数据结构 都可以 被实现 Iterator 接口的结构 消费(consume)。
+ 迭代器（iterator）是按需创建的一次性对象。每个迭代器都会关联一个可迭代对象，而迭代器 会暴露 其关联的可迭代对象 中与迭代相关的 API。
+ 迭代器无须了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。

## 可迭代协议
可迭代协议要求实现 Iterable 接口需要同时具备两种能力：
+ 支持迭代的自我识别能力
+ 创建实现 Iterator 接口的对象的能力
因此在 JS 中为满足 Iterable 接口的要求，使用特殊的`Symbol.iterator`作为属性名，属性值是默认迭代器，其引用一个迭代器工厂函数（iterator creator），调用这个工厂函数会返回一个新迭代器。

## JS拥有内置的可迭代对象
+ Array
+ Map
+ Set
+ String
+ 函数的 arguments 对象
+ NodeList 对象
普通对象不是可迭代对象，但可以通过实现 Iterable 接口来使其成为可迭代对象。

## JS中会自动调用迭代器的场景
+ for...of
+ 解构赋值
+ 扩展运算符
+ Array.from()
+ Map(), Set(), WeakMap(), WeakSet()构造函数
+ Promise.all
+ Promise.race
+ yield*表达式

## JS中迭代器的实现
+ JS 规定，如果一个对象具有 next 方法，并且该方法返回一个IteratorResult对象，则认为该对象是一个迭代器
+ IteratorResult对象是一个包含两个属性的对象，value和done。value属性是当前迭代的值，done属性是一个布尔值，表示迭代是否结束。
## 提前终止迭代器
可选的 return()方法用于指定迭代器提前关闭执行的逻辑。如果迭代器提前关闭执行，return()方法会返回一个包含 done 属性为 true 的对象，表示迭代器已经关闭。

给一个不可关闭的迭代器增加这个方法并不能让它变成可关闭的。这是因为调用 return()不会强制迭代器进入关闭状态。但 return()方法还是会被调用。
