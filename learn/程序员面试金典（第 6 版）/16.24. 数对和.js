/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/17
 */
/*
* https://leetcode.cn/problems/pairs-with-sum-lcci/
* */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function(nums, target) {
    let map = {}
    let res = []
    for (let i = 0; i < nums.length; i ++){
        if (map[target - nums[i]]){
            res.push([target - nums[i], nums[i]])
            map[target - nums[i]] = map[target - nums[i]] - 1
        }else {
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }
    }
    return res
};
console.log(pairSums([-2,-1,0,3,5,6,7,9,13,14], 12));