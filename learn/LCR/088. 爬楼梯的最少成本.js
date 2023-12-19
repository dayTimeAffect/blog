/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/16
 */
/*
* https://leetcode.cn/problems/GzCJIP/
* */
var minCostClimbingStairs = function(cost) {
    const dp = [0, 0]
    for (let i = 2; i <= cost.length; i ++){
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
    }
    return dp[cost.length]
};
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));