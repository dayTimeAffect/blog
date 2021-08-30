/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/30
 */
/*
* https://leetcode-cn.com/problems/jump-game/
* */
var canJump = function(nums) {
    let len = nums.length
    let dp = [nums[0]]
    for (let i = 1; i < len; i ++){
        if (dp[i - 1] === 0) return false
        dp[i] = Math.max(dp[i - 1] - 1, nums[i])
    }
    return true
};
console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,0,0]));
console.log(canJump([0]));
console.log(canJump([0]));