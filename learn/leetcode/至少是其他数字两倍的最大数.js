/**
 * @Author: dayTimeAffect
 * @Date: 2024/10/31
 */
/*
* https://leetcode.cn/problems/largest-number-at-least-twice-of-others/description/?envType=problem-list-v2&envId=array&difficulty=EASY
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max, second;
    if (nums[0] > nums[1]){
        max = 0
        second = 1
    }else {
        max = 1
        second = 0
    }
    for (let i = 2; i < nums.length; i ++){
        if (nums[i] > nums[second] && nums[i] < nums[max]){
            second = i
        }
        if (nums[i] > nums[max]){
            second = max
            max = i
        }
    }
    return nums[max] >= 2 * nums[second] ? max : -1
};
console.log(dominantIndex([1,2,3,4]));