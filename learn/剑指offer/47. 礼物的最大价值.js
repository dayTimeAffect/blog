/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/8
 */
/*
* https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/
* */
var maxValue = function(grid) {
    let m = grid.length, n = grid[0].length
    let dp = new Array(m).fill(0).map(v => new Array(n).fill(0))
    dp[0][0] = grid[0][0]
    for (let i = 1; i < m; i ++){
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for (let j = 1; j < n; j ++){
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }
    for (let i = 1; i < m; i ++){
        for (let j = 1; j < n; j ++){
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    return dp[m - 1][n - 1]
};
console.log(maxValue([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]));