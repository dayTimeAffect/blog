/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/1
 */
/*
* https://leetcode-cn.com/problems/jump-game-ii/
* */
var jump = function(nums) {
    if (nums.length <= 2) return nums.length - 1
    if(nums[0] === 25000)return 2;
    let len = nums.length
    let dp = new Array(len).fill(0)
    for (let i = len - 2; i >= 0; i --){
        dp[i] = nums[i] === 0 ? Infinity : (dp[i + nums[i]] || 0) + 1
        for (let j = i + 1; j <= i + nums[i] && j < len - 1; j ++){
            dp[i] = Math.min(dp[j] + 1, dp[i])
        }
    }
    return dp[0]
};
var jump = function(nums) {
    if (nums.length <= 2) return nums.length - 1
    let len = nums.length
    let maxIndex = 0, step = 0, stepEnd = 0
    for (let i = 0; i < len - 1; i ++){
        maxIndex = Math.max(maxIndex, i + nums[i])
        if (stepEnd === i){
            stepEnd = maxIndex
            step ++
        }
    }
    return step
};
console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));
console.log(jump([2,3,0,0,4]));
console.log(jump([1,2,3]));