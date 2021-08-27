/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/27
 */
/*
* https://leetcode-cn.com/problems/house-robber-ii/
* */
var rob = function(nums) {
    //把环拆成两个队列，一个是从0到n-1，另一个是从1到n，然后返回两个结果最大的。
    if (nums.length <= 1) return nums[0] || 0
    const findMaxRobMoney = (nums) => {
        let n = nums.length
        let dp = [0, nums[0]]
        for (let i = 2; i <= n; i ++){
            dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
        }
        return dp[n]
    }
    return Math.max(findMaxRobMoney(nums.slice(0, nums.length - 1)), findMaxRobMoney(nums.slice(1)))
};
// console.log(rob([2, 3, 2]));
// console.log(rob([1,2,3,1]));
// console.log(rob([0]));
console.log(rob([1]));
console.log(rob([]));