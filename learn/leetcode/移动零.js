/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/22
 */
/*
* https://leetcode-cn.com/problems/move-zeroes/
* */
var moveZeroes = function(nums) {
    let n = nums.length
    let left = 0, right = 0;
    while (left < n){
        if (right >= n){
            nums[left] = 0
            left ++
            continue;
        }
        if (nums[right] !== 0){
            nums[left] = nums[right]
            left ++
        }
        right ++
    }
    return nums
};
console.log(moveZeroes([0,1,0,3,12]));