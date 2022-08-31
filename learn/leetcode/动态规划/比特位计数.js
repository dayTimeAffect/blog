/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/25
 */
/**
 * @param {number} n
 * @return {number[]}
 */
/*
* https://leetcode.cn/problems/counting-bits/
* */
var countBits = function(n) {
    let dp = [0], tem = 2
    if (n > 0) dp[1] = 1
    if (n > 1) dp[2] = 1
    for (let i = 3; i <= n; i ++){
        if (i < tem * 2){
            dp[i] = dp[tem] + dp[i - tem]
        }else {
            dp[i] = 1
            tem = i
        }
    }
    return dp
};
console.log(countBits(12));
// 1(1) - 1
// 2(10) - 1
// 3(11) - 2
// 4(100) - 1
// 5(101) - 2
// 6(110) - 2
// 7(111) - 3
// 8(1000) - 1
// 9(1001) - 2
// 10(1010) - 2
// 11(1011) - 3
// 12(1100) - 2