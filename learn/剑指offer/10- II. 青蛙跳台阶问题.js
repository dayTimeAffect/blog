/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/11
 */
/*
* https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
* */
var numWays = function(n) {
    let dp = [1, 1, 2]
    for (let i = 3; i <= n; i ++){
        dp[i] = (dp[i - 1] + dp[i - 2]) % (Math.pow(10, 9) + 7)
    }
    return dp[n]
};
console.log(numWays(78));