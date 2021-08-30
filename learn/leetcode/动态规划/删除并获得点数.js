/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/30
 */
/*
* https://leetcode-cn.com/problems/delete-and-earn/
* */
var deleteAndEarn = function(nums) {
    //使用tem记录每位数字出现的次数。max为tem的长度
    //然后动态规划tem数组，假如删除tem[i]，那么就不能删除tem[i - 1]
    //所以变成打家劫舍问题。dp[i] = Math.max(dp[i - 2] + tem[i] * i, dp[i - 1])
    if (nums.length <= 1) return nums[0] || 0
    let max = -Infinity
    for (let i = 0; i < nums.length; i ++){
        max = Math.max(max, nums[i])
    }
    let tem = new Array(max + 1).fill(0)
    for (let i = 0; i < nums.length; i ++){
        tem[nums[i]] ++
    }
    let dp = [tem[0], tem[1] * 1]
    for (let i = 2; i <= max; i ++){
        dp[i] = Math.max(dp[i - 2] + tem[i] * i, dp[i - 1])
    }
    return dp[max]
};
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
console.log(deleteAndEarn([3,4,2]));
console.log(deleteAndEarn([1,1,1,2,4,5,5,5,6]));
console.log(deleteAndEarn([3, 1]));