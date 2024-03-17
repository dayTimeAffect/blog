/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/18
 */
/*
* https://leetcode.cn/problems/recursive-mulitply-lcci/description/
* */
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function(A, B) {
    if (A === 0 || B === 0) return 0
    if (A === 1) return B
    if (B === 1) return A
    return A + multiply(A, B - 1)
};