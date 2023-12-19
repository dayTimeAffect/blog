/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/19
 */
/*
* https://leetcode.cn/problems/insert-into-bits-lcci/
* */
/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function(N, M, i, j) {
    let temN = N.toString(2).split('')
    let temM = M.toString(2).split('')
    if (temM.length < j - i + 1){
        temM = new Array(j - i + 1 - temM.length).fill(0).concat(temM)
    }
    if (temN.length < j + 1){
        temN = new Array(j + 1 - temN.length).fill(0).concat(temN)
    }
    console.log(temN.length, JSON.stringify(temN))
    console.log(temM.length, JSON.stringify(temM))
    temN.splice(temN.length - j - 1, j - i + 1, ...temM)
    return parseInt(temN.join(''), 2)
};
console.log(insertBits(1143207437, 1017033, 11, 31));