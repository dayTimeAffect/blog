/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/16
 */
/*
* https://leetcode-cn.com/problems/n-th-tribonacci-number/
* */
var tribonacci = function(n) {
    //递归算法
    if (n <= 2) return Math.ceil(n / 2)
    return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
};
var tribonacci = function(n) {
    //将递归转为循环，避免重复计算，即动态规划
    let dp = [0, 1, 1]
    for (let i = 3; i <= n; i ++){
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
    }
    return dp[n]
};
var tribonacci = function(n) {
    if (n <= 2) return Math.ceil(n / 2)
    //优化动态规划，只记录前三个状态，转为常数空间
    let a = 0, b = 1, c = 1, d
    for (let i = 3; i <= n; i ++){
        d = a + b + c
        a = b
        b = c
        c = d
    }
    return d
};
console.log(tribonacci(1));