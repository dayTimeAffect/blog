/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/31
 */
/*
* https://leetcode.cn/problems/color-fill-lcci/description/
* */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let map = new Map(), oldColor = image[sr][sc], m = image.length, n = image[0].length
    let dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== oldColor || map.has(i + '-' + j)) return
        image[i][j] = newColor
        map.set(i + '-' + j, true)
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    dfs(sr, sc)
    return image
};