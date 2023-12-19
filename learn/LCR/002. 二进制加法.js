/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/15
 */
/*
* https://leetcode.cn/problems/JFETK5/
* */
var addBinary = function(a, b) {
    if (a === '0' || b === '0') return a === '0' ? b : a
    let len = Math.max(a.length, b.length)
    a = a.padStart(len, '0')
    b = b.padStart(len, '0')
    let next = 0, i = len - 1, res = ''
    while (i >= 0){
        let cur = next + Number(a[i]) + Number(b[i])
        if (cur === 0){
            next = 0
            res = '0' + res
        }
        if (cur === 1){
            next = 0
            res = '1' + res
        }
        if (cur === 2){
            next = 1
            res = '0' + res
        }
        if (cur === 3){
            next = 1
            res = '1' + res
        }
        i --
    }
    return next === 0 ? res : '1' + res
};
console.log(addBinary('11', '10'));
console.log(addBinary('1010', '1011'));