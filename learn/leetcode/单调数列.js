/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/2
 */
/*
* https://leetcode-cn.com/problems/monotonic-array/
* */
var isMonotonic = function(nums) {
    if (nums.length <= 2) return true
    let flag = 0, len = nums.length
    for (let i = 0; i < len - 1; i ++){
        if (nums[i] === nums[i + 1]) continue;
        if (nums[i] > nums[i + 1]){
            if (flag === -1) return false
            flag = 1
        }
        if (nums[i] < nums[i + 1]){
            if (flag === 1) return false
            flag = -1
        }
    }
    return true
};
// console.log(isMonotonic([1,2,2,3]));
// console.log(isMonotonic([6,5,4,4]));
// console.log(isMonotonic([1,3,2]));
console.log(isMonotonic([11,11,9,4,3,3,3,1,-1,-1,3,3,3,5,5,5]));