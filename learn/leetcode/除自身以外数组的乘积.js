/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/12
 */
/*
* https://leetcode.cn/problems/product-of-array-except-self/
* */
var productExceptSelf = function(nums) {
    let len = nums.length, left = [], right = []
    left[0] = 1
    right[len] = 1
    for (let i = 0, j = len; i <= len, j >= 0; i ++, j --){
        left[i + 1] = nums[i] * left[i]
        right[j - 1] = nums[j - 1] * right[j]
    }
    return nums.map((v, i) => left[i] * right[i + 1])
};
console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));