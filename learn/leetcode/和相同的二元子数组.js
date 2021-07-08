/**
 * @Author: dayTimeAffect
 * @Date: 2021/7/8
 */
/*
* https://leetcode-cn.com/problems/binary-subarrays-with-sum/
* */
var numSubarraysWithSum = function(nums, goal) {
    const preSum = [0];
    for (const num of nums) preSum.push(preSum[preSum.length - 1] + num); // 前缀和
    let count = 0;
    const preSumCount = new Map([[0, 1]])
    for (let i = 0; i < nums.length; i ++){
        // goal = preSum[i + 1] - preSum[prev] -> preSum[prev] = preSum[i + 1] - goal
        // 所以count + preSum[prev]的次数 -> count = count + preSumCount.get(preSum[i + 1] - goal)
        count += preSumCount.get(preSum[i + 1] - goal) || 0;
        // 记录每个前缀和的值出现的次数
        preSumCount.set(preSum[i + 1], (preSumCount.get(preSum[i + 1]) || 0 ) + 1)
    }
    return count
};
console.log(numSubarraysWithSum([0,0,0,0,0], 0));