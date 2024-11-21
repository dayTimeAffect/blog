/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/17
 */
/*
* https://leetcode.cn/problems/range-addition-ii/description/
* */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (ops.length === 0) return m * n
    let minI = m, minJ = n
    for (let op of ops){
        const [i, j] = op
        if (i === 0 && j === 0) continue;
        minI = Math.min(i || 1, minI)
        minJ = Math.min(j || 1, minJ)
    }
    return minI * minJ
};