/**
 * @Author: dayTimeAffect
 * @Date: 2024/11/14
 */
/*
* https://leetcode.cn/problems/rotate-function/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    if (nums.length <= 1) return 0
    let temSum = 0, len = nums.length
    let F = new Array(len).fill(0)
    for (let i = 0; i < len; i ++){
        F[0] += i * nums[i]
        temSum += nums[i]
    }
    let res = F[0]
    for (let i = 1; i < len; i ++){
        F[i] = F[i - 1] + temSum - len * nums[len - i]
        res = Math.max(res, F[i])
    }
    console.log(F)
    return res
};
console.log(maxRotateFunction([1,2,3,4,5,6,7,8,9,10]));