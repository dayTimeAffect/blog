/**
 * @Author: dayTimeAffect
 * @Date: 2023/2/1
 */
/*
* https://leetcode.cn/problems/largest-divisible-subset/
* */
var largestDivisibleSubset = function(nums) {
    //dp[i] 表示在输入数组 nums 升序排列的前提下，以 nums[i] 为最大整数的「整除子集」的大小
    // 枚举 j = 0...i-1 的所有整数 nums[j]，如果 nums[j] 能整除 nums[i]，说明 nums[i] 可以扩充在以 nums[j] 为最大整数的整除子集里成为一个更大的整除子集
    nums.sort((a, b) => a - b)
    const dp = [[nums[0]]]
    for (let i = 1; i < nums.length; i ++){
        dp[i] = [nums[i]]
        for (let j = 0; j < i; j ++){
            if (nums[i] % nums[j] === 0 && dp[i].length <= dp[j].length){
                dp[i] = [...dp[j], nums[i]]
            }
        }
    }
    return dp.reduce((cur, next) => {
        if (next.length > cur.length){
            return next
        }
        return cur
    }, [])
};
// console.log(largestDivisibleSubset([1,2,4,8,10]));
console.log(largestDivisibleSubset([3,4,16,8]));