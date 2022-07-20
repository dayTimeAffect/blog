/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/12
 */
/*
* https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix/
* */
var oddCells = function(m, n, indices) {
    let r_arr = new Array(m).fill(0)
    let c_arr = new Array(n).fill(0)
    let len = indices.length, res = 0
    for (let i = 0; i < len; i ++){
        const [r, c] = indices[i]
        r_arr[r] ++
        c_arr[c] ++
    }
    for (let i = 0; i < m; i ++){
        for (let j = 0; j < n; j ++){
            res += ((r_arr[i] + c_arr[j]) % 2)
        }
    }
    return res
};