/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/24
 */
/*
* https://leetcode.cn/problems/maximum-average-subarray-i/description/
* */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = 0, res = -Infinity, count = 0, sum = 0
    while (i < nums.length){
        sum += nums[i]
        count ++
        if (count > k){
            sum -= nums[i - k]
            count --
        }
        if (count === k){
            res = Math.max(res, (sum / k).toFixed(5))
        }
        i ++
    }
    return res
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
console.log(findMaxAverage([5], 1));