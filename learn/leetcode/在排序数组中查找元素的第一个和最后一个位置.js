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
var searchRange = function(nums, target) {
    let len = nums.length,
        left_min = 0, right_min = len,
        left_max = 0, right_max = len,
        minI = -1, maxI = -1
    while (left_min <= right_min){
        let mid_min = Math.floor((left_min + right_min) / 2)
        if (nums[mid_min] === target){
            minI = mid_min
            right_min --
        }else if (nums[mid_min] > target){
            right_min = mid_min - 1
        }else {
            left_min = mid_min + 1
        }
    }

    while (left_max <= right_max){
        let mid_max = Math.floor((left_max + right_max) / 2)
        if (nums[mid_max] === target){
            maxI = mid_max
            left_max ++
        }else if (nums[mid_max] > target){
            right_max = mid_max - 1
        }else {
            left_max = mid_max + 1
        }
    }
    return [minI, maxI]
};
console.log(searchRange([5, 7, 7, 8, 8, 9], 8));