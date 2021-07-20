/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/20
 */
/*
* https://leetcode-cn.com/problems/minimize-maximum-pair-sum-in-array/
* */
var minPairSum = function(nums) {
    let sortNums = nums.sort((a, b) => a - b)
    let n = sortNums.length
    let res = -Infinity
    for (let i = 0; i < n / 2; i ++){
        res = Math.max(res, sortNums[i] + sortNums[n - i - 1])
    }
    return res
};
console.log(minPairSum([3, 5, 2, 3]));