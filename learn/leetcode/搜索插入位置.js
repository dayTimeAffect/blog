/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/20
 */
/*
* https://leetcode-cn.com/problems/search-insert-position/
* */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return mid
        if (target > nums[mid]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return left
};
console.log(searchInsert([1, 3, 5, 6], 2));