/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/17
 */
/*
* https://leetcode-cn.com/problems/min-cost-climbing-stairs/
* */
var minCostClimbingStairs = function(cost) {
    // n - 1为阶梯数，即n为楼顶。由于每次支付体力，都可以爬一层或者两层
    //所以需要到达i（楼顶），则取 到达倒数第二层的最小花费 + 倒数第二层的花费 与 到达倒数第一层的最小花费 + 倒数第一层的花费 的最小值
    let n = cost.length
    let dp = [0, 0]
    for (let i = 2; i <= n; i ++){
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
    }
    return dp[n]
};
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([10,15,20, 60, 3,4,5,6,78,9]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));