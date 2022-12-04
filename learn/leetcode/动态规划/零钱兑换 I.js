/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/10
 */
/*
* https://leetcode-cn.com/problems/coin-change/
* */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let coin of coins){
        for (let i = 0; i <= amount; i ++){
            if (i < coin) continue;
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount] !== Infinity ? dp[amount] : -1
};

console.log(coinChange([1, 2, 5], 5));