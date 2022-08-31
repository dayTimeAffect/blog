/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/24
 */
/*
* https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/
* */
var fib = function(n) {
    let dp = [0, 1]
    for (let i = 2; i <= n; i ++){
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }
    return dp[n]
};
console.log(fib(2));