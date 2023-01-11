/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/19
 */
/*
* https://leetcode.cn/problems/JEj789/
* */
/*
* dp[i][k] 表示粉刷前 i 号房子且第 i 号房子被粉刷成第 k (0≤k<3)(0≤k<3) 种颜色时的最小花费成本
* */
var minCost = function(costs) {
    let dp = [[...costs[0]]]
    for(let i = 1; i < costs.length; i ++){
        dp.push([0, 0, 0])
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0]
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1]
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2]
    }
    return Math.min(...dp[costs.length - 1])
};
console.log(minCost([[17,2,17],[16,16,5],[14,3,19]]));