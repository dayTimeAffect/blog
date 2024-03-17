/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/31
 */
/*
* https://leetcode.cn/problems/coin-lcci/description/
* */
/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    let dp = new Array(n + 1).fill(0)
    let coins = [1, 5, 10, 25]
    dp[0] = 1
    for (let coin of coins){
        for (let i = coin; i <= n; i ++){
            dp[i] += dp[i - coin]
        }
    }
    return dp[n] % (1000000007)
};