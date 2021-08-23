/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/23
 */
/*
* https://leetcode-cn.com/problems/get-maximum-in-generated-array/
* */
var getMaximumGenerated = function(n) {
    if (n <= 1) return n
    let nums = [0, 1], max = 1
    for (let i = 2; i <= n; i += 2){
        nums[i] = nums[i / 2]
        nums[i + 1] = i + 1 <= n ? nums[i / 2] + nums[i / 2 + 1] : -Infinity
        max = Math.max(max, nums[i], nums[i + 1])
    }
    return max
};
console.log(getMaximumGenerated(7));
console.log(getMaximumGenerated(2));
console.log(getMaximumGenerated(3));
console.log(getMaximumGenerated(4));
console.log(getMaximumGenerated(15));