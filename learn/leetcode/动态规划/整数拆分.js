/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/1
 */
/*
* https://leetcode-cn.com/problems/integer-break/
* */
var integerBreak = function(n) {
    let dp = [0, 0]
    for (let i = 2; i <= n; i ++){
        for (let j = 1; j < i; j ++){
            dp[i] = Math.max(dp[i] || 0, j * dp[i - j], j * (i - j))
        }
    }
    return dp[n]
};
console.log(integerBreak(10));
console.log(integerBreak(8));
// console.log(integerBreak(3));
// console.log(integerBreak(4));
// console.log(integerBreak(2));