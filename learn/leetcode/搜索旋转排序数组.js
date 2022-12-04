/**
 * @Author: dayTimeAffect
 * @Date: 2022/10/27
 */
/*
* https://leetcode.cn/problems/search-in-rotated-sorted-array/
* */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right){
        const mid = Math.floor((left + right) / 2)
        console.log(left, right, mid, nums[mid]);
        if (nums[mid] === target) return mid
        if (nums[0] <= nums[mid]){
            if (nums[0] <= target && target < nums[mid]){
                right = mid - 1
            }else {
                left = mid + 1
            }
        }else {
            if (nums[mid] < target && target <= nums[nums.length - 1]){
                left = mid + 1
            }else {
                right = mid - 1
            }
        }
    }
    return -1
};
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([3,1], 1));