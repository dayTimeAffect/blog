/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/5
 */
/*
* https://leetcode-cn.com/problems/subarray-product-less-than-k/
* */
var numSubarrayProductLessThanK = function(nums, k) {
    // 一个长度为n的数组，他的所有连续子串数量是1+2+...n
    // 对于长为n的数组，新加一个数，那么就会新增 n + 1 个子串
    if (k <= 1) return 0
    const len = nums.length
    let res = 0, prod = 1;
    for (let r = 0, l = 0; r < len; r ++){
        prod *= nums[r]
        while (prod >= k){
            prod /= nums[l ++]
        }
        res += r - l + 1
    }
    return res
};
console.log(numSubarrayProductLessThanK([10,5,2,6], 100));
