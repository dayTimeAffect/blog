/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/11
 */
/*
* https://leetcode.cn/problems/ugly-number-ii/
* */
var nthUglyNumber = function(n) {
    let dp = [0, 1], tem = [1, 1, 1]
    for (let i = 2; i <= n; i ++){
        let m = dp[tem[0]] * 2, n = dp[tem[1]] * 3, k = dp[tem[2]] * 5
        dp[i] = Math.min(m, n, k)
        if (m === dp[i]){
            tem[0] ++
        }
        if (n === dp[i]){
            tem[1] ++
        }
        if (k === dp[i]){
            tem[2] ++
        }
    }
    return dp[n]
};
console.log(nthUglyNumber(11));