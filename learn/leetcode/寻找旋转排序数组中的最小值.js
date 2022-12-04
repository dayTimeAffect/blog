/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/6
 */
/*
* https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/
* */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0]
    let left = 0, right = nums.length - 1
    while (left < right){
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[left] && nums[mid] < nums[right]){
            return nums[left]
        }else if (nums[mid] > nums[right]){
            left = mid + 1
        }else if (nums[mid] < nums[right]){
            right = mid
        }
    }
    return nums[left]
};
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([11,13,15,17]));
console.log(findMin([2,1]));
console.log(findMin([3,1,2]));