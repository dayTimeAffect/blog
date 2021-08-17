/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/17
 */
/*
* https://leetcode-cn.com/problems/climbing-stairs/
* */
var climbStairs = function(n) {
    let dp = [0, 1, 2]
    for (let i = 3; i <= n; i ++){
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};