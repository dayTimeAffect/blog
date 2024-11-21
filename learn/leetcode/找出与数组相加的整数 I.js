/**
 * @Author: dayTimeAffect
 * @Date: 2024/8/8
 */
/*
* https://leetcode.cn/problems/find-the-integer-added-to-array-i/description/?envType=daily-question&envId=2024-08-08
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    return (nums2.reduce((acc, cur) => acc + cur, 0) - nums1.reduce((acc, cur) => acc + cur, 0)) / nums1.length
};