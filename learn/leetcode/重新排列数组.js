/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/29
 */
/*
* https://leetcode.cn/problems/shuffle-the-array/
* */
var shuffle = function(nums, n) {
    let res = []
    for (let i = 0; i < n; i ++){
        res.push(nums[i], nums[n + i])
    }
    return res
};