### common.js和es6中模块引入的区别？
Common.js是一种模块规范，最初被应用于Nodejs，成为Nodejs 的模块规范。
运行在浏览器端的JavaScript由于也缺少类似的规范，在ES6出来之前，前端也实现了一套相同的模块规范(例如: AMD)，用来对前端模块进行管理。
自ES6起，引入了一套新的ES6 Module规范，在语言标准的层面上实现了模块功能，而且实现得相当简单，
有望成为浏览器和服务器通用的模块解决方案。但目前浏览器对ES6 Module兼容还不太好，
我们平时在Webpack 中使用的export和import，会经过Babel转换为CommonJs规范。
在使用上的差别主要有:

+ CommonJs模块输出的是一个值的拷贝，ES6模块输出的是值的引用;CommonJS模块是运行时加载，ES6模块是编译时输出接口。
+ CommonJs是单个值导出，ES6 Module可以导出多个
+ CommonJs是动态语法可以写在判断里，ES6 Module静态语法只能写在顶层
+ CommonJs的this是当前模块，ES6 Module的this是undefined

#### CommonJS
+ 对于基本数据类型，属于复制。即会被模块缓存。同时，在另一个模块可以对该模块输出的变量重新赋值
+ 对于复杂数据类型，属于浅拷贝。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。
+ 当使用require命令加载某个模块时，就会运行整个模块的代码。
+ 当使用require命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。也就是说，CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。
+ 循环加载时，属于加载时执行。即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
```
// b.js
exports.done = false
let a = require('./a.js')
console.log('b.js-1', a.done)
exports.done = true
console.log('b.js-2', '执行完毕')

// a.js
exports.done = false
let b = require('./b.js')
console.log('a.js-1', b.done)
exports.done = true
console.log('a.js-2', '执行完毕')

// c.js
let a = require('./a.js')
let b = require('./b.js')

console.log('c.js-1', '执行完毕', a.done, b.done)

node c.js
b.js-1 false
b.js-2 执行完毕
a.js-1 true
a.js-2 执行完毕
c.js-1 执行完毕 true true

在Node.js中执行c模块。此时遇到require关键字，执行a.js中所有代码。
在a模块中exports之后，通过require引入了b模块，执行b模块的代码。
在b模块中exports之后，又require引入了a模块，此时执行a模块的代码。
a模块只执行exports.done = false这条语句。
回到b模块，打印b.js-1, exports, b.js-2。b模块执行完毕。
回到a模块，接着打印a.js-1, exports, b.js-2。a模块执行完毕
回到c模块，接着执行require，需要引入b模块。由于在a模块中已经引入过了，所以直接就可以输出值了。
结束。
从以上结果和分析过程可以看出，当遇到require命令时，会执行对应的模块代码。当循环引用时，有可能只输出某模块代码的一部分。当引用同一个模块时，不会再次加载，而是获取缓存。
```
#### ES6模块
+ ES6模块中的值属于【动态只读引用】
+ 对于只读来说，即不允许修改引入变量的值，import的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到import命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
+ 对于动态来说，原始值发生变化，import加载的值也会发生变化。不论是基本数据类型还是复杂数据类型。
+ 循环加载时，ES6模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行