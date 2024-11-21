/**
 * @Author: dayTimeAffect
 * @Date: 2024/10/16
 */
/*
* https://leetcode.cn/problems/n-repeated-element-in-size-2n-array/description/?envType=problem-list-v2&envId=array&difficulty=EASY&status=TO_DO
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i ++){
        if (map[nums[i]]){
            map[nums[i]] ++
        }else {
            map[nums[i]] = 1
        }
    }
    return Object.keys(map).find(v => map[v] === nums.length / 2) / 1
};
console.log(repeatedNTimes([1,2,3,3]))