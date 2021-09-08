/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/8
 */
/*
* https://leetcode-cn.com/problems/unique-paths-ii/
* */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let dp = []
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    dp[0] = obstacleGrid[0][0] === 1 ? [0] : [1]
    for (let i = 1; i < n; i ++){
        dp[0][i] = (obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0) ? 0 : 1
    }
    for (let i = 1; i < m; i ++){
        dp[i] = (obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0) ? [0] : [1]
    }
    for (let i = 1; i < m; i ++){
        for (let j = 1; j < n; j ++){
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
console.log(uniquePathsWithObstacles([[0,1],[0,0]]));
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
console.log(uniquePathsWithObstacles([[1]]));