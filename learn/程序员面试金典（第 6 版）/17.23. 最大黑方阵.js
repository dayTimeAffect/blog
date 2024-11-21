/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/23
 */
/*
* https://leetcode.cn/problems/max-black-square-lcci/description/
* */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findSquare = function(matrix) {
    let m = matrix.length, n = matrix[0].length, x, y, size = 0
    const getSize = (point, size, maxSize) => {
        const [x, y] = point
        if (x + size >= m || y + size >= n) return maxSize
        if (matrix[x][y + size] === 1 || matrix[x + size][y]) return maxSize
        if (matrix[x + size][y + size] === 1) return getSize(point, size + 1, maxSize)
        for (let i = 0; i <= size; i ++){
            if (matrix[x + i][y + size] === 1 || matrix[x + size][y + i] === 1) return getSize(point, size + 1, maxSize)
        }
        maxSize = size + 1
        return getSize(point, size + 1, maxSize)
    }
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            if (matrix[i][j] === 0 && (m - i > size && n - j > size)){
                const temSize = getSize([i, j], 1, 1)
                console.log(temSize)
                if (temSize > size) {
                    size = temSize
                    x = i
                    y = j
                }
            }
        }
    }
    return size === 0 ? [] : [x, y, size]
};
// console.log(findSquare([
//     [1,0,1],
//     [0,0,1],
//     [0,0,1]
// ]));
console.log(findSquare([[0,1,1],[1,0,1],[1,1,0]]));
// console.log(findSquare([
//     [1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
//     [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
//     [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
//     [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
//     [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
//     [0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
//     [0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
//     [1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1, 0, 0, 1, 1, 1]
// ]));