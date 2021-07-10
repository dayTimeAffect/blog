/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/10
 */
/*
* https://leetcode-cn.com/problems/time-based-key-value-store/
* */
var TimeMap = function() {
    this.keyMap = {}
    return null
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.keyMap[key]){
        this.keyMap[key].push([timestamp, value])
    }else{
        this.keyMap[key] = [[timestamp, value]]
    }
    return null
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let res = ''
    if (this.keyMap[key]){
        let tem = this.keyMap[key]
        for (let i = tem.length - 1; i >= 0; i --){
            if (timestamp >= tem[i][0]){
                res = tem[i][1]
                break
            }
        }
    }
    return res
};
let kv = new TimeMap()
console.log(kv);
console.log(kv.set('foo', 'bar', 10));
console.log(kv.set('foo', 'bar2', 20));
console.log(kv.get('foo', 5));
console.log(kv.get('foo', 10));

console.log(kv.get('foo', 15));
console.log(kv.get('foo', 20));
console.log(kv.get('foo', 25));