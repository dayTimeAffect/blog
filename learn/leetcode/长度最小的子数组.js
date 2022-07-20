/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/20
 */
/*
* https://leetcode.cn/problems/minimum-size-subarray-sum/
* */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = -1, flag = 0, minLen = Infinity
    const len = nums.length
    while (left < len && right < len){
        if (flag >= target){
            minLen = Math.min(right - left + 1, minLen)
            flag -= nums[left]
            left ++
        }else {
            right ++
            flag += nums[right]
        }
    }
    return minLen === Infinity ? 0 : minLen
};
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));