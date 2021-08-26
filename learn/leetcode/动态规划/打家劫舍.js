/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/26
 */
/*
* https://leetcode-cn.com/problems/house-robber/
* */
var rob = function(nums) {
    // dp[i]，表示小偷偷到第i家时，最大金额
    // 小偷如果要偷第i家，那么就不能偷上一家。所以dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    let dp = [], n = nums.length
    dp[0] = 0
    dp[1] = nums[0]
    for (let i = 2; i <= n; i ++){
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    }
    return dp[n]
};
console.log(rob([1, 2, 3, 1]));
console.log(rob([2,7,9,3,1]));