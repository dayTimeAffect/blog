/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/1
 */
/*
* https://leetcode.cn/problems/find-majority-element-lcci/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length, count = 0, res = null
    // 摩尔投票法
    for (let num of nums){
        if (count === 0) res = num
        if (res === num) count ++
        else count --
    }
    count = 0
    // 验证 res 是否为众数
    for (let num of nums){
        if (num === res) count ++
    }
    console.log(count);
    return count > len / 2 ? res : -1
};
// console.log(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5])); // 5
console.log(majorityElement([1, 2, 3]));