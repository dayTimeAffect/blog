/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/3
 */
/*
* https://leetcode.cn/problems/count-number-of-pairs-with-absolute-difference-k/
* */
var countKDifference = function(nums, k) {
    let res = 0, len = nums.length
    const cnt = new Map()
    for (let i = 0; i < len; i ++){
        res += (cnt.get(nums[i] - k) || 0) + (cnt.get(nums[i] + k) || 0)
        cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1)
    }
    return res
};