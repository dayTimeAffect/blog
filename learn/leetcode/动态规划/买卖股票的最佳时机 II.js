/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/3
 */
/*
* https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
* */
var maxProfit = function(prices) {
    const len = prices.length
    let res = 0
    for (let i = 1; i < len; i ++){
        if (prices[i] > prices[i - 1]){
            res += prices[i] - prices[i - 1]
        }
    }
    return res
};
var maxProfit = function(prices) {
    const len = prices.length, dp = new Array(len).fill(0).map(() => new Array(2))
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < len; i ++){
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return dp[len - 1][0]
};
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([1,2,1,2,1]));