/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/4
 */
/*
* https://leetcode.cn/problems/convert-integer-lcci/
* */
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function(A, B) {
    let tem = A ^ B
    let count = 0
    while (tem !== 0){
        if (tem & 1) count ++
        tem >>>= 1
    }
    return count
};