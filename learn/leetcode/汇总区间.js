/**
 * @Author: dayTimeAffect
 * @Date: 2024/5/21
 */
/*
* https://leetcode.cn/problems/summary-ranges/description/
* */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return []
    let res = [], pre = nums[0], tem = [pre]
    for (let i = 1; i < nums.length; i ++){
        if (nums[i] - pre === 1){
            pre = nums[i]
            tem.push(nums[i])
        }else {
            if (tem.length === 1) {
                res.push(tem[0].toString())
            }else {
                res.push(tem[0] + '->' + tem[tem.length - 1])
            }
            pre = nums[i]
            tem = [pre]
        }
    }
    if (tem.length === 1) {
        res.push(tem[0].toString())
    }else {
        res.push(tem[0] + '->' + tem[tem.length - 1])
    }
    return res
};