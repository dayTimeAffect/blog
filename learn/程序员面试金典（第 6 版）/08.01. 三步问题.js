/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/10
 */
/*
* https://leetcode.cn/problems/three-steps-problem-lcci/description/
* */
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    if (n <= 2) return n
    if (n === 3) return 4
    let a = 1, b = 2, c = 4
    for (let i = 4; i <= n; i ++){
        let tem = (a + b + c) % 1000000007
        a = b
        b = c
        c = tem
    }
    return c
};