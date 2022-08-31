/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/24
 */
/*
* https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
* */
var maxSubArray = function(nums) {
    const len = nums.length
    let dp = [nums[0]]
    for (let i = 1; i < len; i ++){
        dp[i] = Math.max(dp[i - 1], 0) + nums[i]
    }
    return Math.max(...dp)
};