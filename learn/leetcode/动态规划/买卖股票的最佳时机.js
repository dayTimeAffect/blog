/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/3
 */
/*
* https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
* */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0
    const dp = []
    let maxRes = 0
    for (let i = 1; i < prices.length; i ++){
        dp[i] = i
        if (prices[i] >= prices[dp[i - 1]]){
            dp[i] = dp[i - 1]
            maxRes = Math.max(maxRes, prices[i] - prices[dp[i - 1]])
        }
    }
    return maxRes
};
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));