/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/10
 */
/*
* https://leetcode.cn/problems/robot-in-a-grid-lcci/description/
* */
/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function(obstacleGrid) {
    let res = [], m = obstacleGrid.length, n = obstacleGrid[0].length
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return []
    const dp = (i, j, path) => {
        if (i === m - 1 && j === n - 1 && obstacleGrid[i][j] === 0){
            res = [...path]
            return true
        }
        if (obstacleGrid[i][j] === 1) return false
        obstacleGrid[i][j] = 1
        if (i + 1 < m && dp(i + 1, j, [...path, [i + 1, j]])) return true
        if (j + 1 < n && dp(i, j + 1, [...path, [i, j + 1]])) return true
        return false
    }
    dp(0, 0, [[0, 0]])
    return res
};
console.log(pathWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));