/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/21
 */
/*
* https://leetcode-cn.com/problems/largest-number/
* */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        return Number(String(b) + String(a)) - Number(String(a) + String(b))
    })
    return nums[0] > 0 ? nums.reduce((res, cur) => res += cur, "") : "0"
};
console.log(largestNumber([3,30,34,5,9]));