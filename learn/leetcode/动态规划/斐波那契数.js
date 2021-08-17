/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/16
 */
/*
* https://leetcode-cn.com/problems/fibonacci-number/
* */
var fib = function(n) {
    //递归算法
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
};
var fib = function(n) {
    //动态规划
    let dp = [0, 1]
    for (let i = 2; i <= n; i ++){
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
var fib = function(n) {
    //优化动态规划，只记录前两个状态，空间使用为常数空间
    if (n < 2) return n
    let a = 0, b = 1
    for (let i = 2; i <= n; i ++){
        c = a + b
        a = b
        b = c
    }
    return c
};