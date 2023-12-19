/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/10
 */
/*
* https://leetcode.cn/problems/rotate-matrix-lcci/description/
* */
var rotate = function(matrix) {
    let N = matrix.length
    for (let i = 0; i < N / 2; i ++){
        [matrix[i], matrix[N - i - 1]] = [matrix[N - i - 1], matrix[i]]
    }
    for (let i = 0; i < N; i ++){
        for (let j = i; j < N; j ++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    return matrix
};
rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
])
// 7 8 9
// 4 5 6
// 1 2 3