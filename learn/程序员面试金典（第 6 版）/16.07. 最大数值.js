/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/23
 */
/*
* https://leetcode.cn/problems/maximum-lcci/description/
* */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function(a, b) {
    let k = (a / 2  - b / 2 ) >> 31
    return a * (k + 1) - b * k
};
console.log(maximum(1, 2)); // 2
console.log(maximum(2, 1)); // 2
console.log(maximum(2147483647, -2147483648)); // 2147483647
console.log(maximum(-2147483648, 2147483647)); // 2147483647
console.log(maximum(682, -25455)); // 682