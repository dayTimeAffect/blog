/**
 * @Author: dayTimeAffect
 * @Date: 2022/12/19
 */
/*
* https://leetcode.cn/problems/w3tCBm/
* */
var countBits = function(n) {
    if (n === 0) return []
    let dp = [0]
    for (let i = 1; i <= n; i ++){
        dp[i] = dp[i >> 1] + (i & 1)
    }
    return dp
};