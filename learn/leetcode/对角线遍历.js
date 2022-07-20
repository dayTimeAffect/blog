/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/14
 */
/*
* https://leetcode.cn/problems/diagonal-traverse/
* */
var findDiagonalOrder = function(mat) {
    let m = mat.length - 1, n = mat[0].length - 1
    let res = [], tier = m + n, flag = false
    for (let t = 0; t <= tier; t ++){
        let i, j
        if (flag){
            i = t > n ? t - n : 0
            j = t > n ? n : t
        }else {
            i = t > m ? m : t
            j = t > m ? t - m : 0
        }
        while (i >= 0 && j >= 0 && i <= m && j <= n){
            res.push(mat[i][j])
            if (flag){
                i ++
                j --
            }else {
                i --
                j ++
            }
        }
        flag = !flag
    }
    return res
};
console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(findDiagonalOrder([[1,2],[3,4]]));