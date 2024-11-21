/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/24
 */
/*
* https://leetcode.cn/problems/longest-continuous-increasing-subsequence/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length <= 1) return 1
    let res = 1, flag = 1
    for (let i = 1; i < nums.length; i ++){
        if (nums[i] > nums[i - 1]){
            flag ++
        }else {
            res = Math.max(res, flag)
            flag = 1
        }
    }
    res = Math.max(res, flag)
    return res
};