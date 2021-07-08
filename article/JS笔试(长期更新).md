# 常见的一些JS选择题

每日学习，保持自己的竞争力，把自己的学习记录分析出来，希望能帮助大家

#### 1
```javascript
function consoleX() {
    console.log(x1);
    console.log(x2);
    var x1 = 'x1';
    let x2 = 'x2';
}
consoleX();
```
+ `x1` and `undefined`
+ `x1` and `ReferenceError`
+ `ReferenceError` and `x2`
+ `undefined` and `ReferenceError`

> 答案: D<br>
> 解析: var 声明的变量有提升，并且会初始化值undefined，所以提前使用var声明的变量，此时它的值为undefined,而let、const声明的变量，虽然也有提升，但是并没有被初始化，提前使用该变量会出现暂时性死区而报错

#### 2

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

+ `0 1 2` and `0 1 2`
+ `3 3 3` and `3 3 3`
+ `0 1 2` and `3 3 3`
+ `3 3 3` and `0 1 2`

>答案: D<br>
>解析: 在事件循环机制中，setTimeout会在两个for循环执行结束后才会执行，此时var定义的i为全局变量，在循环之后i的值为3；而let定义变量有块级作用域，每次循环中setTimeout中拿的i都是全新的值。

#### 3

```javascript
for (let i = [], j = 0; j < 2; j ++){
    i.push(j)
    setTimeout(() => {
        console.log([...i]);
        console.log(j);
    }, 0)
}
```

+ `[0, 1] 0` and `[0, 1] 1 `
+ `[0] 0` and `[0, 1] 1`
+ `[0, 1] 1` and `[0, 1] 1`

> 答案: A<br>
> 解析: 虽然let定义变量有块级作用域, 但是i为引用类型，i中存放的是指针没有变，所以最终i是[0, 1]

#### 5

```javascript
let x = 5
const a = {
    x: 10,
    showX1() {
        return this.x;
    },
    showX2: () => this.x,
};
console.log(a.showX1());
console.log(a.showX2());
golbal.a
```

+ `10` and `5`
+ `10` and `10`
+ `5` and `5`
+ `10` and `undefined`

> 答案: D<br>
> 解析: showX1调用时，this指向调用对象也就是a，showX2为箭头函数，this指向定义时所处的对象，但是let定义的变量在
> Script作用域中，所以在浏览器环境中，this为window，不能获取到x


### 参考
+ [javascript-questions](https://github.com/lydiahallie/javascript-questions)

