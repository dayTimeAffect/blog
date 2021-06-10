/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/10
 */
/*
* https://leetcode-cn.com/problems/coin-change-2/
* */
var change = function(amount, coins) {
    if(amount === 0)return 1
    let dp = new Array(amount + 1).fill(0)
    //当不选取任何硬币时，金额之和才为 0，因此只有 1 种硬币组合
    dp[0] = 1
    for (let coin of coins){
        for (let i = coin; i <= amount; i ++){
            dp[i] += dp[i - coin]
        }
    }
    return dp[amount]
};

console.log(change(5, [1, 2, 5]));