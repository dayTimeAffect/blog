/**
 * 按列翻转得到最大值等行数
 * https://leetcode.cn/problems/flip-columns-for-maximum-number-of-equal-rows/
 */
var maxEqualRowsAfterFlips = function(matrix) {
    let map = {}, m = matrix.length, n = matrix[0].length
    for(let i = 0; i < m; i ++){
        let str = ''
        for(let j = 0; j < n; j ++){
            if (j === 0 && matrix[i][j] === 0){
                str += matrix[i].join('')
                break;
            }
            str += Number(!matrix[i][j])
        }
        map[str] = map[str] ? map[str] + 1 : 1
    }
    return Math.max(...Object.values(map))
};