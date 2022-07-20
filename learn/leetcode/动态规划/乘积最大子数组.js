/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/18
 */
/*
* https://leetcode.cn/problems/maximum-product-subarray/
* */
var maxProduct = function(nums) {
    let len = nums.length
    let maxDp = [...nums]
    let minDp = [...nums]
    for (let i = 1; i < len; i ++){
        maxDp[i] = Math.max(maxDp[i - 1] * nums[i], Math.max(maxDp[i], minDp[i - 1] * nums[i]))
        minDp[i] = Math.min(minDp[i - 1] * nums[i], Math.min(minDp[i], maxDp[i - 1] * nums[i]))
    }
    return Math.max(...maxDp, ...minDp)
};
// console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([2,-5,-2,-4,3]));