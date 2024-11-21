/**
 * @Author: dayTimeAffect
 * @Date: 2024/11/7
 */
/*
* https://leetcode.cn/problems/range-sum-query-2d-immutable/description/
* */
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    let m = matrix.length, n = matrix[0].length
    let pre = new Array(m + 1).fill(0).map(v => new Array(n + 1).fill(0))
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            pre[i + 1][j + 1] = matrix[i][j] + pre[i][j + 1] + pre[i + 1][j] - pre[i][j]
        }
    }
    this.pre = pre
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.pre[row2 + 1][col2 + 1] - this.pre[row2 + 1][col1] - this.pre[row1][col2 + 1] + this.pre[row1][col1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */