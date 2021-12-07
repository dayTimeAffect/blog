/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/29
 */
/*
* https://leetcode-cn.com/problems/rotate-image/
* */
var rotate = function(matrix) {
    let n = matrix.length - 1
    for (let i = 0; i <= n; i ++){
        for (let j = i + 1; j <= n; j ++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    for (let i = 0; i <= n; i ++){
        for (let j = 0; j < n / 2; j ++){
            [matrix[i][j], matrix[i][n - j]] = [matrix[i][n - j], matrix[i][j]]
        }
    }
    return matrix
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));