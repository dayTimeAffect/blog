/*
* https://leetcode.cn/problems/subsets/
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 1) return [[], nums]
    let res = [], tem = []
    const backtrack = (cur) => {
        res.push([...tem])
        for (let i = cur; i < nums.length; i ++) {
            tem.push(nums[i])
            backtrack(i + 1)
            tem.pop()
        }
    }
    backtrack(0)
    return res
};
console.log(subsets([1,2,3]));