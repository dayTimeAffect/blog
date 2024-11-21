/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/26
 */
/*
* https://leetcode.cn/problems/missing-number-lcci/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let sum = n * (n + 1) / 2
    let sum_nums = nums.reduce((pre, cur) => pre + cur, 0)
    return sum - sum_nums
};