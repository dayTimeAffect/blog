/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/6
 */
/*
* https://leetcode-cn.com/problems/minimum-path-sum/
* */
var minPathSum = function(grid) {
    // dp[i][j] 表示从左上角出发到 (i,j)(i,j) 位置的最小路径和
    // dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    let dp = [[grid[0][0]]]
    let m = grid[0].length, n = grid.length
    for (let i = 1; i < n; i ++){
        dp[i] = [dp[i - 1][0] + grid[i][0]]
    }
    for (let i = 1; i < m; i ++){
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < n; i ++){
        for (let j = 1; j < m; j ++){
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    return dp[n - 1][m - 1]
};
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum([[1,2,3],[4,5,6]]));