/*
* https://leetcode-cn.com/problems/set-matrix-zeroes/
* */
var setZeroes = function(matrix) {
    let flag_row1 = false, flag_col1 = false, m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i ++) flag_col1 = matrix[i][0] === 0 || flag_col1
    for (let i = 0; i < n; i ++) flag_row1 = matrix[0][i] === 0 || flag_row1
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            if (matrix[i][j] === 0){
                matrix[i][0] = true
                matrix[0][j] = true
            }
        }
    }
    for (let i = 1; i < m; i ++) {
        if (matrix[i][0] === true) {
            for (let j = 0; j < n; j ++){
                matrix[i][j] = 0
            }
        }
    }
    for (let i = 1; i < n; i ++) {
        if (matrix[0][i] === true) {
            for (let j = 0; j < m; j ++){
                matrix[j][i] = 0
            }
        }
    }
    if (flag_row1) {
        for (let i = 0; i < n; i ++ ) matrix[0][i] = 0
    }
    if (flag_col1) {
        for (let i = 0; i < m; i ++ ) matrix[i][0] = 0
    }
    return matrix
};
console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));