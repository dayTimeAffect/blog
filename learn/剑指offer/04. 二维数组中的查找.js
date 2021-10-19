/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/18
 */
/*
* https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
* */
var findNumberIn2DArray = function(matrix, target) {
    // 循环使用二分法
    if (matrix.length === 0) return false
    let n = matrix[0].length - 1, m = matrix.length - 1
    if (target < matrix[0][0] || target > matrix[m][n]) return false
    for (let i = 0; i <= m; i ++){
        let left = 0, right = n
        while (left <= right && matrix[i][right] >= target && matrix[i][left] <= target){
            let center = (left + right) >> 1
            if (matrix[i][center] === target) return true
            if (matrix[i][center] > target) right = center - 1
            else left = center + 1
        }
    }
    return false
};
var findNumberIn2DArray = function(matrix, target) {
    // 二维转一维，使用二分法
    if (matrix.length === 0) return false
    let tem = matrix.reduce(function (res, cur){
        return [...res, ...cur]
    }, []).sort((a, b) => a - b)
    let left = 0, right = tem.length
    while (left <= right){
        let mid = (left + right) >> 1
        if (tem[mid] === target) return true
        if (tem[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return false
};
console.log(findNumberIn2DArray([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 5));
console.log(findNumberIn2DArray([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 20));
