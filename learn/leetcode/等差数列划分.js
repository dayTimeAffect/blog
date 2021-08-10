/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/10
 */
/*
* https://leetcode-cn.com/problems/arithmetic-slices/
* */
/*var numberOfArithmeticSlices = function(nums) {
    //双指针
    if (nums.length < 3) return 0
    let left = 0, right = 1, n = nums.length, diff = nums[right] - nums[left], count = 0
    nums[n] = Infinity
    while (right <= n){
        if (nums[right] - nums[right - 1] === diff){
            right ++
        }else{
            //统计子数组，等差数列求和公式
            count += (right - left - 1) * (right - left - 2) / 2
            left = right - 1
            right = left + 1
            diff = nums[right] - nums[left]
        }
    }
    return count
};*/
var numberOfArithmeticSlices = function(nums) {
    //动态规划
    if (nums.length < 3) return 0
    let n = nums.length, diff = nums[1] - nums[0], count = 0, dp = [0, 0]
    for (let i = 2; i < n; i ++){
        if (nums[i] - nums[i - 1] === diff){
            dp[i] = dp[i - 1] + 1
            count += dp[i]
        }else{
            dp[i] = 0
            diff = nums[i] - nums[i - 1]
        }
    }
    return count
};
console.log(numberOfArithmeticSlices([1,2,3,4, 5]));
console.log(numberOfArithmeticSlices([1,2,3,4, 5, 6]));
console.log(numberOfArithmeticSlices([1,2,3,4, 5, 6, 8, 10, 12]));
