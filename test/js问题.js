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
let b = 1
function a(){
    // let b = 2
    function foo() {
        var myName = " 极客时间 "
        let test1 = 1
        const test2 = 2
        var innerBar = {
            getName:function(){
                console.log('b:', b)
                console.log(test1)
                return myName
            },
            setName:function(newName){
                myName = newName
            }
        }
        return innerBar
    }
    var bar = foo()
    bar.setName(" 极客邦 ")
    bar.getName()
    console.log(bar.getName())
}
a()



