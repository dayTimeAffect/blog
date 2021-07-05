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