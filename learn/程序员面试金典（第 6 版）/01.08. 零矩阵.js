/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/19
 */
/*
* https://leetcode.cn/problems/zero-matrix-lcci/
* */
var setZeroes = function(matrix) {
    const filterRow = {}, filterCol = {};
    const m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            if (matrix[i][j] === 0){
                filterRow[i] = 1
                filterCol[j] = 1
            }
        }
    }
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            if (filterRow[i] || filterCol[j]){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
};
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));