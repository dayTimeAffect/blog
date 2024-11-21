/**
 * @Author: dayTimeAffect
 * @Date: 2024/11/14
 */
/*
* https://leetcode.cn/problems/non-decreasing-array/description/
* */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if (nums.length <= 2) return true
    let flag = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > nums[i + 1]){
            flag ++
            if (flag > 1){
                return false
            }
            if (i > 0 && nums[i + 1] < nums[i - 1]){
                nums[i + 1] = nums[i]
            }
        }
    }
    return true
};