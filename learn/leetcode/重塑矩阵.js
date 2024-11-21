/**
 * @Author: dayTimeAffect
 * @Date: 2024/11/14
 */
/*
* https://leetcode.cn/problems/reshape-the-matrix/description/
* */
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length, n = mat[0].length
    if (m * n !== r * c) return mat
    let res = new Array(r).fill(0).map(v => new Array(c).fill(0))
    let temI = 0, temJ = 0
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            res[temI][temJ] = mat[i][j]
            temJ ++
            if (temJ >= c){
                temI ++
                temJ = 0
            }
        }
    }
    return res
};