/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/13
 */
/*
* https://leetcode-cn.com/problems/binary-search/
* */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1, res = -1
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return mid
        else if (nums[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return res
};
console.log(search([-1, 0, 3, 5, 9, 12], 11));