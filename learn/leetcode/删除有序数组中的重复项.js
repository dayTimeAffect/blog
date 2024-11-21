/**
 * @Author: dayTimeAffect
 * @Date: 2024/8/8
 */
/*
* https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i ++){
        if (map[nums[i]]){
            nums.splice(i, 1)
            i --
        }
        map[nums[i]] = true
    }
    return nums.length
};
console.log(removeDuplicates([1,1,2]));