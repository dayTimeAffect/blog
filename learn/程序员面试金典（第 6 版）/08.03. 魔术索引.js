/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/10
 */
/*
* https://leetcode.cn/problems/magic-index-lcci/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    const dp = (left, right) => {
        if (left > right) return -1
        let mid = Math.floor((left + right) / 2)
        let res = dp(left, mid - 1)
        if (res !== -1) return res
        if (nums[mid] === mid) return mid
        return dp(mid + 1, right)
    }
    return dp(0, nums.length - 1)
};