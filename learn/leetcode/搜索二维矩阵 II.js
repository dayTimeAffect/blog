/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/25
 */
/*
* https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
* */
var searchMatrix = function(matrix, target) {
    let m = matrix.length - 1, n = matrix[0].length - 1
    for (let i = 0; i <= m; i ++){
        if (matrix[i][0] > target || matrix[i][n] < target) continue;
        let left = 0, right = n
        while (left <= right){
            let mid = (left + right) >> 1
            if (matrix[i][mid] === target) return true
            if (matrix[i][mid] > target) right = mid - 1
            else left = mid + 1
        }
    }
    return false
};
var searchMatrix = function(matrix, target) {
    let m = matrix.length - 1,n = matrix[0].length - 1
    let x = 0, y = n
    while (x <= m && y >= 0){
        if (matrix[x][y] === target) return true
        if (matrix[x][y] > target) y --
        else x ++
    }
    return false
};
// console.log(searchMatrix([[1, 1]], 2));
console.log(searchMatrix([[5], [6]], 6));