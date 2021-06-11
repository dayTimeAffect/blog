/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/11
 */
/*
* https://leetcode-cn.com/problems/perfect-squares/
* */
var numSquares = function(n) {
    //动态规划
    let dp = [0, 1]
    for (let i = 2; i <= n; i ++){
        dp[i] = i
        for (let j = 1; j <= Math.sqrt(i); j ++){
            dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1)
        }
    }
    return dp[n]
};
console.log(numSquares(12));