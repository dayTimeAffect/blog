/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/8
 */
/*
* https://leetcode.cn/problems/max-consecutive-ones/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0, tem = 0
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] === 1){
            tem ++
        }else{
            res = Math.max(res, tem)
            tem = 0
        }
    }
    return Math.max(res, tem)
};