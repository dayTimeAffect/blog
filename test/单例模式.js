/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/5
 */
const createClass = function (params){
    this.name = params.name
}
createClass.prototype.getName = function (){
    return this.getName
}

//贪婪加载
const createInstance = (function (){
    let instance
    return function (){
        if (!instance) {
            instance = new createClass(...arguments)
        }
        return instance
    }
})()

let a = new createInstance({name:'a'});
let b = new createInstance({name:'b'});
console.log(a === b);
console.log(a.name,a.name);
let c = new createClass({name:'c'});
let d = new createClass({name:'d'});
console.log(c === d);
console.log(c.name,d.name);

//延迟加载
const getSingleton = function (fn) {
    let result;
    return function() {
        return result || (result = fn.apply(this,arguments));
    }
}
let renderInstance = getSingleton(createInstance)

let e = new renderInstance({name:'e'});
let f = new renderInstance({name:'f'});
console.log(e === f);
console.log(e.name,f.name);