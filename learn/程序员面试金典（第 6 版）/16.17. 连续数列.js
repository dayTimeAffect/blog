/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/1
 */
/*
* https://leetcode.cn/problems/contiguous-sequence-lcci/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [nums[0]], res = nums[0]
    for (let i = 1; i < nums.length; i ++){
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i]
        }else{
            dp[i] = nums[i]
        }
    }
    for (let num of dp){
        res = Math.max(res, num)
    }
    return res
};