/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/17
 */
/*
* https://leetcode.cn/problems/sum-swap-lcci/description/
* */
/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function(array1, array2) {
    let sum1 = array1.reduce((pre, cur) => pre + cur, 0)
    let sum2 = array2.reduce((pre, cur) => pre + cur, 0)
    if (sum1 === sum2 || (sum1 + sum2) % 2 !== 0) return []
    let average = (sum1 + sum2) / 2
    let set = new Set(array2)
    for (let i = 0; i < array1.length; i ++){
        let target = average - sum1 + array1[i]
        if (set.has(target)){
            return [array1[i], target]
        }
    }
    return []
};