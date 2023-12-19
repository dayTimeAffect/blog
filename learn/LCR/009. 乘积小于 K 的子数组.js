/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/28
 */
/*
* https://leetcode.cn/problems/ZVAVXX/
* */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k === 0) return 0
    let i = 0, j = 0, tem = nums[0], count = 0
    while (j < nums.length){
        if (tem < k){
            count += (j - i) + 1
            j ++
            tem *= nums[j]
        }else {
            tem /= nums[i]
            if (i === j) j ++
            i ++
        }
    }
    return count
};
console.log(numSubarrayProductLessThanK([10,5,2,6], 100));