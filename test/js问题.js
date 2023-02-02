/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/5
 */
/*function consoleX() {
    console.log(x1);
    console.log(x2);
    var x1 = 'x1';
    let x2 = 'x2';
}

consoleX();*/
/*for (let i = [], j = 0; j < 2; j ++){
    i.push(j)
    setTimeout(() => {console.log([...i]);}, 0)
}
for (let i = [], j = 0; j < 2; j ++){
    setTimeout(() => {console.log([...i]);}, 0)
    setTimeout(() => {console.log(j);}, 0)
}*/
/*
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
console.log(global);*/
/*function aa(a){
    console.log(a)
    var a = 1
    function a(){}
    console.log(a)
}
aa(2)*/
/*
let a = 1
let b = new Number(1)
let c = 1

console.log(a == b)
console.log(a === b)
console.log(b === c)
console.log(a === c)*/
/*function getPersonInfo(one, two, three) {
    console.log(one)
    console.log(two)
    console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`*/
// let undefined = 123
// console.log(undefined);


/*
let userInfo = {
    name:"jack.ma",
    age:13,
    sex:'male',
    updateInfo:function(){
        // 模拟 xmlhttprequest 请求延时
        setTimeout(function(){
            this.name = "pony.ma"
            this.age = 39
            this.sex = 'female'
        },100)
    }
}
userInfo.updateInfo()
setTimeout(() => {
    console.log(this)
}, 200)
*/
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
function A(){}
function B(){}
let a = new A()
console.log(myInstanceOf(a, A));
console.log(myInstanceOf(a, Object));
console.log(myInstanceOf(a, B));