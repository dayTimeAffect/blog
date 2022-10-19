/*
* https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/
* */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return true
        if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
            left ++
            right --
        } else if (nums[left] <= nums[mid]){
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            }else {
                left = mid + 1
            }
        } else if (nums[mid] <= nums[right]){
            if (target <= nums[right] && target > nums[mid]) {
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
    }
    return false
};