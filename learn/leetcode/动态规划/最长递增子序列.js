/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/2
 */
/*
* https://leetcode.cn/problems/longest-increasing-subsequence/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length <= 1) return nums.length
    // dp[i] 标识 0 - i 中 以nums[i]结尾的严格递增子序列的长度
    let dp = new Array(nums.length).fill(1)
    let max = 1
    for (let i = 1; i < nums.length; i ++){
        for (let j = 0; j < i; j ++){
            if (nums[i] > nums[j]){
                if (dp[i] <= dp[j]){
                    dp[i] = dp[j] + 1
                    max = Math.max(dp[i], max)
                }
            }
        }
    }
    return max
};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([0,1,0,3,2,3]));
console.log(lengthOfLIS([7,7,7,7,7,7,7]));
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));