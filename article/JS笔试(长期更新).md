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
+ A:`x1` and `undefined`
+ B:`x1` and `ReferenceError`
+ C:`ReferenceError` and `x2`
+ D:`undefined` and `ReferenceError`

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

+ A:`0 1 2` and `0 1 2`
+ B:`3 3 3` and `3 3 3`
+ C:`0 1 2` and `3 3 3`
+ D:`3 3 3` and `0 1 2`

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

+ A:`[0, 1] 0` and `[0, 1] 1 `
+ B:`[0] 0` and `[0, 1] 1`
+ C:`[0, 1] 1` and `[0, 1] 1`

> 答案: A<br>
> 解析: 虽然let定义变量有块级作用域, 但是i为引用类型，i中存放的是指针没有变，所以最终i是[0, 1]

#### 4

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

+ A:`10` and `5`
+ B:`10` and `10`
+ C:`5` and `5`
+ D:`10` and `undefined`

> 答案: D<br>
> 解析: showX1调用时，this指向调用对象也就是a，showX2为箭头函数，this指向定义时所处的对象，但是let定义的变量在
> Script作用域中，所以在浏览器环境中，this为window，不能获取到x

#### 5
```javascript
let a = { say: 'Hey!' }
let b = a

b.say = 'Hello'
console.log(d.say)
```
+ A: Hello
+ B: undefined
+ C: ReferenceError
+ D: TypeError

> 答案: A<br>
> 解析: a、b指向的同一个对象，对象的直接赋值是赋值的指针

#### 6
```javascript
let a = 1
let b = new Number(1)
let c = 1

console.log(a == b)
console.log(a === b)
console.log(b === c)
console.log(a === c)
```
> 答案: true false false true<br>
> 解析: b是一个包装类型，是一个对象。使用==比较时会有隐式转换，所以返回为true，===为严格运算符，两边类型不一样时直接返回false

#### 7
```javascript
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor
        return this.newColor
    }

    constructor({ newColor = 'green' } = {}) {
        this.newColor = newColor
    }
}

const freddie = new Chameleon({ newColor: 'purple' })
freddie.colorChange('orange')
```
> 答案: TypeError<br>
> 解析: 静态方法被设计为只能被创建它们的构造器使用（也就是 Chameleon），并且不能传递给实例

#### 8
```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());
```
> 答案: TypeError<br>
> 解析: member.getFullName不是一个函数,getFullName没有被挂在Person的原型上，它只是Person的一个属性而已

#### 9
```javascript
let number = 0
console.log(number++)
console.log(++number)
console.log(number)
```
> 答案: 0 2 2<br>
> 解析: 一元后自增运算符 ++先返回后自增，一元前自增运算符 ++ 先自增后返回

#### 10
```javascript
function getPersonInfo(one, two, three) {
    console.log(one)
    console.log(two)
    console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`
```
> 答案: [ '', ' is ', ' years old' ] Lydia 21<br>
> 解析: 如果使用标记模板字面量，第一个参数的值总是包含字符串的数组。其余的参数获取的是传递的表达式的值！

#### 11
```javascript
String.prototype.showConsoleTxt = () => {
    return 'console'
}

const name = 'name'

console.log(name.showConsoleTxt());
```
> 答案: console<br>
> 解析: 基本类型字符串被自动转换为字符串对象，由字符串原型函数生成。因此，所有 string(string 对象)都可以访问该原型上的方法

#### 12
```javascript
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])
```
> 答案: 456<br>
> 解析: 对象的键被自动转换为字符串,然而，当字符串化一个对象时，它会变成 "[object Object]", 所以一直在操作a["[object Object]"]

#### 13
```javascript
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()
```
> 答案: First Third Second<br>
> 解析: 事件循环机制

#### 14
```javascript
(() => {
    let x, y
    try {
        throw new Error()
    } catch (x) {
        (x = 1), (y = 2)
        console.log(x)
    }
    console.log(x)
    console.log(y)
})()
```
> 答案: 1 undefined 2<br>
> 解析: catch 代码块接收参数 x。当我们传递参数时，这与之前定义的变量 x 不同 。这个 x 是属于 catch 块级作用域的。 然后，我们将块级作用域中的变量赋值为 1，同时也设置了变量 y 的值。现在，我们打印块级作用域中的变量 x，值为 1。 catch 块之外的变量 x 的值仍为 undefined， y 的值为 2。当我们在 catch 块之外执行 console.log(x) 时，返回 undefined，y 返回 2

### 参考
+ [javascript-questions](https://github.com/lydiahallie/javascript-questions)

