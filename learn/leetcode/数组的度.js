/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/17
 */
/*
* https://leetcode.cn/problems/degree-of-an-array/description/
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    if (nums.length === 0) return 0
    let map = {}, maxCount = 1, res = nums.length
    for (let i = 0; i < nums.length; i ++){
        if (map[nums[i]]){
            map[nums[i]].count ++
            map[nums[i]].end = i
            maxCount = Math.max(map[nums[i]].count, maxCount)
        }else {
            map[nums[i]] = {
                start: i, end: i, count: 1
            }
        }
    }
    for (let key in map){
        const { start, end, count } = map[key]
        if (count >= maxCount){
            res = Math.min(res, end - start + 1)
        }
    }
    return res
};
console.log(findShortestSubArray([1,2,2,3,1]));