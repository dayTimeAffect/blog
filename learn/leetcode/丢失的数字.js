/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/6
 */
/*
* https://leetcode-cn.com/problems/missing-number/
* */
/*var missingNumber = function(nums) {
    let map = new Array(nums.length + 1).fill(false), len = nums.length
    for (let i = 0; i < len; i ++){
        map[nums[i]] = true
    }
    for (let i = 0; i < len + 1; i ++){
        if (!map[i]) return i
    }
};*/
var missingNumber = function(nums) {
    let res = 0, len = nums.length
    for (let i = 0; i <= len; i ++){
        res ^= i
        if (i < len) res ^=  nums[i]
    }
    return res
};
console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));