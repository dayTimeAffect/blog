/*
* https://leetcode.cn/problems/spiral-matrix/
* */
var spiralOrder = function(matrix) {
    let m = matrix.length - 1, n = matrix[0].length - 1
    let flag_m = 0, flag_n = 1, res = [], i = 0, j = -1
    let ring_i = 0, ring_j = 0
    while (res.length < (m + 1) * (n + 1)){
        if (flag_n && (j + flag_n > n - ring_j || j + flag_n < ring_j)) {
            flag_m = flag_n > 0 ? 1 : -1
            flag_n = 0
        }
        if (flag_m && (i + flag_m > m - ring_i || i + flag_m < ring_i)) {
            flag_n = flag_m > 0 ? -1 : 1
            flag_m = 0
        }
        if (matrix[i + flag_m][j + flag_n] === false){
            ring_j ++
            ring_i ++
        } else{
            res.push(matrix[i + flag_m][j + flag_n])
            i = i + flag_m
            j = j + flag_n
            matrix[i][j] = false
        }
    }
    return res
};
// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// console.log(spiralOrder([[1],[2],[3]]));
console.log(spiralOrder([[1,2,3]]));