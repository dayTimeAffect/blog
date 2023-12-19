/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/31
 */
/*
* https://leetcode.cn/problems/N6YdxV/
* */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target){
            return mid
        }
        if (target < nums[mid]){
            right = mid - 1
        }else {
            left = mid + 1
        }
    }
    return left
};
console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([1,3], 2));