/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/10
 */
/*
* https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
* */
var searchRange = function(nums, target) {
    let right = -1, repeat = 0
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] === target){
            right = i
            repeat ++
        }
    }
    return [repeat > 0 ? right - repeat + 1 : right - repeat, right]
};
console.log(searchRange([5, 7, 7, 8, 8, 9], 10));