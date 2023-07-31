/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/20
 */
/*
* https://leetcode.cn/problems/O4NDxx/
* */
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.preRowMatrix = []
    for (let i = 0; i < matrix.length; i ++){
        let tem = [], preTem = 0
        for (let j = 0; j < matrix[0].length; j ++){
            preTem += matrix[i][j]
            tem.push(preTem)
        }
        tem[-1] = 0
        this.preRowMatrix.push(tem)
    }
    return null
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0
    for (let i = row1; i <= row2; i ++){
        sum += this.preRowMatrix[i][col2] - this.preRowMatrix[i][col1 - 1]
    }
    return sum
};

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.preMatrix = new Array(matrix.length).fill(0).map(v => new Array(matrix[0].length).fill(0))
    this.preMatrix[-1] = new Array(matrix[0].length).fill(0)
    this.preMatrix[-1][-1] = 0
    for (let i = 0; i < matrix.length; i ++){
        let pre = 0
        this.preMatrix[i][-1] = 0
        for (let j = 0; j < matrix[0].length; j ++){
            pre += matrix[i][j]
            this.preMatrix[i][j] = this.preMatrix[i - 1][j] + pre

        }
    }
    return null
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.preMatrix[row2][col2] - this.preMatrix[row2][col1 - 1] - this.preMatrix[row1 - 1][col2] + this.preMatrix[row1 - 1][col1 - 1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
var obj = new NumMatrix([
    [3,0,1,4,2],
    [5,6,3,2,1],
    [1,2,0,1,5],
    [4,1,0,1,7],
    [1,0,3,0,5]
])
console.log(obj.sumRegion(2, 1, 4, 3));
console.log(obj.sumRegion(1, 1, 2, 2));
