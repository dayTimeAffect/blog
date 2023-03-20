/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/9
 */
/*
* https://leetcode.cn/problems/optimal-division/
* */
var optimalDivision = function(nums) {
    if (nums.length === 1) return "" + nums[0]
    if (nums.length === 2) return "" + nums[0] + '/' + nums[1]
    nums[1] = "(" + nums[1]
    nums[nums.length - 1] = nums[nums.length - 1] + ')'
    return nums.join('/')
};