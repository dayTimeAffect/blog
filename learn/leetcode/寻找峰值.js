/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/15
 */
/*
* https://leetcode-cn.com/problems/find-peak-element/
* */
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0
    let n = nums.length
    let left = 0, right = n - 1, mid = Math.floor((n - 1) / 2)
    nums[-1] = -Infinity
    nums[n] = -Infinity
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid
        if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) {
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
};
console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));
console.log(findPeakElement([1,2]));
console.log(findPeakElement([1,2,3]));
console.log(findPeakElement([1,3,2,1]));