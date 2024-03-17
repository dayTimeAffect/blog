/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/7
 */
/*
* https://leetcode.cn/problems/sorted-matrix-search-lcci/description/
* */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i ++){
        if (matrix[i][0] > target) return false
        if (matrix[i][n - 1] < target) continue
        let left = 0, right = n - 1
        while (left <= right){
            let mid = Math.floor((left + right) / 2)
            if (matrix[i][mid] === target){
                return true
            }
            if (matrix[i][mid] < target){
                left = mid + 1
            }else {
                right = mid - 1
            }
        }
    }
};
var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false
    const m = matrix.length, n = matrix[0].length
    let x = m - 1, y = 0
    while (x >= 0 && y < n){
        if (matrix[x][y] === target) return true
        if (matrix[x][y] > target){
            // 当前值大于目标值，所以当前列的值都大于目标值，向左移动
            x --
        }else {
            // 当前值小于目标值，所以当前行的值都小于目标值，向下移动
            y ++
        }
    }
    return false
}