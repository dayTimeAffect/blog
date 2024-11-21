/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/7
 */
/*
* https://leetcode.cn/problems/subsets-ii/description/
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if (nums.length === 0) return []
    nums.sort((a, b) => a - b)
    let res = [[]], tem = []
    const handle = (index) => {
        let map = {}
        for (let i = index; i < nums.length; i ++){
            if (map[nums[i]]) continue;
            map[nums[i]] = true
            tem.push(nums[i])
            res.push([...tem])
            handle(i + 1)
            tem.pop()
        }
    }
    handle(0)
    return res
};
console.log(subsetsWithDup([1,2,2]));
console.log(subsetsWithDup([0]));