/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/19
 */
/*
* https://leetcode.cn/problems/next-greater-element-i/
* */
var nextGreaterElement = function(nums1, nums2) {
    let map = {}, len1 = nums1.length, len2 = nums2.length, res = new Array(len1).fill(-1)
    for (let i = 0; i < len2; i ++) map[nums2[i]] = i
    for (let i = 0; i < len1; i ++){
        for (let j = map[nums1[i]]; j < len2; j ++){
            if (nums2[j] > nums1[i]) {
                res[i] = nums2[j]
                break;
            }
        }
    }
    return res
};
console.log(nextGreaterElement([4,1,2], [1,3,4,2]));