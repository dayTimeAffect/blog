/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/23
 */
/*
* https://leetcode.cn/problems/factorial-zeros-lcci/description/
* */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // 计算 n! 中 5 的个数
    let res = 0, next = 5
    while (next <= n){
        res += Math.floor(n / next)
        next *= 5
    }
    return res
};
console.log(trailingZeroes(30)); // 7
// console.log(trailingZeroes(3)); // 0
// console.log(trailingZeroes(5)); // 1
// console.log(trailingZeroes(10)); // 2
// console.log(trailingZeroes(20)); // 4
// console.log(trailingZeroes(25)); // 6
console.log(trailingZeroes(50)); // 12