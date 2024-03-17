/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/23
 */
/*
* https://leetcode.cn/problems/smallest-difference-lcci/description/
* */
/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function(a, b) {
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)
    let i = 0, j = 0, res = Infinity
    while (i < a.length && j < b.length){
        res = Math.min(res, Math.abs(a[i] - b[j]))
        if (a[i] < b[j]){
            i ++
        }else {
            j ++
        }
    }
    return res
};
console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])); // 3
