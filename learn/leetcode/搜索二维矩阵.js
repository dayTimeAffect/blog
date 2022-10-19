/*
* https://leetcode.cn/problems/search-a-2d-matrix/
* */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i ++){
        if (target < matrix[i][0]) return false
        if (target > matrix[i][n - 1]) continue;
        let left = 0, right = n - 1;
        while (left <= right){
            let mid = Math.floor((left + right) / 2)
            if (matrix[i][mid] < target) {
                left = mid + 1
            } else if (matrix[i][mid] > target){
                right = mid - 1
            } else {
                return true
            }
        }
    }
    return false
};