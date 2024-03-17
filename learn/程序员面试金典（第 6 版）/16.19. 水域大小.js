/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/11
 */
/*
* https://leetcode.cn/problems/pond-sizes-lcci/description/
* */
/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
    let m = land.length, n = land[0].length
    let res = []
    let dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || land[i][j] !== 0) return 0
        land[i][j] = 1
        return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1) + dfs(i - 1, j - 1) + dfs(i - 1, j + 1) + dfs(i + 1, j - 1) + dfs(i + 1, j + 1)
    }
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            if (land[i][j] === 0){
                res.push(dfs(i, j))
            }
        }
    }
    return res.sort((a, b) => a - b)
};