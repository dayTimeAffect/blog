/**
 * @Author: dayTimeAffect
 * @Date: 2021/10/18
 */
/*
* https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
* */
var missingNumber = function(nums) {
    for (let i = 0; i < nums.length; i ++){
        if (i !== nums[i]) return i
    }
    return nums.length
};
var missingNumber = function(nums) {
    let left = 0, right = nums.length - 1
    if (right === nums[right]) return right + 1
    if (nums[left] !== 0) return 0
    while (left <= right){
        let mid = (left + right) >> 1
        if (mid === nums[mid]) left = mid + 1
        else right = mid - 1
    }
    return left
};
console.log(missingNumber([0,1,3]));
console.log(missingNumber([0,1,2,3,4,5,6,7,9]));
console.log(missingNumber([0,2,3]));