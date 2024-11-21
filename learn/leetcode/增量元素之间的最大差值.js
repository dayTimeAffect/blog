/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/11
 */
/*
* https://leetcode.cn/problems/maximum-difference-between-increasing-elements/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let res = -1, tem = nums[0]
    for (let i = 1; i < nums.length; i ++){
        if (tem >= nums[i]){
            tem = nums[i]
        }else {
            res = Math.max(nums[i] - tem, res)
        }
    }
    return res
};
console.log(maximumDifference([7,1,5,4]))