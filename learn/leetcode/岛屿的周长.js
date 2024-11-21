/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/8
 */
/*
* https://leetcode.cn/problems/island-perimeter/description/
* */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let m = grid.length, n = grid[0].length, res = 0
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            if (grid[i][j] === 1){
                if (i === 0 || grid[i - 1][j] === 0) res ++
                if (i === m - 1 || grid[i + 1][j] === 0) res ++
                if (j === 0 || grid[i][j - 1] === 0) res ++
                if (j === n - 1 || grid[i][j + 1] === 0) res ++
            }
        }
    }
    return res
};