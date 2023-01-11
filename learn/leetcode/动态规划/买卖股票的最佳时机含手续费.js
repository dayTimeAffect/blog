/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/3
 */
/*
* https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
* */
var maxProfit = function(prices, fee) {
    const len = prices.length, dp = new Array(len)
    dp[0] = [
        0,
        -prices[0]
    ]
    for (let i = 1; i < len; i ++){
        dp[i] = [
            Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee),
            Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        ]
    }
    return dp[len - 1][0]
};
console.log(maxProfit([1, 3, 7, 5, 10, 3], 2));
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([1, 2, 3, 4, 5, 6], 2));