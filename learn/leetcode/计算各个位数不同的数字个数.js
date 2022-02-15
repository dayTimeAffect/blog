/**
 * @Author: dayTimeAffect
 * @Date: 2022/2/7
 */
/*
* https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
* */
var countNumbersWithUniqueDigits = function(n) {
    let dp = [1, 10], ans = 9
    for (let i = 2; i <= n; i ++){
        dp[i] = 9 * ans + dp[i - 1]
        ans *= (9 - i + 1)
    }
    return dp[n]
};
console.log(countNumbersWithUniqueDigits(2));
console.log(countNumbersWithUniqueDigits(3));