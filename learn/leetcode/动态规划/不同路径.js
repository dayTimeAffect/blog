/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/8
 */
/*
* https://leetcode-cn.com/problems/unique-paths/
* */
var uniquePaths = function(m, n) {
    let dp = [new Array(n).fill(1)]
    for (let i = 1; i < m; i ++){
        dp[i] = [1]
    }
    for (let i = 1; i < m; i ++){
        for (let j = 1; j < n; j ++){
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));