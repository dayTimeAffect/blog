/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/13
 */
/*
* https://leetcode.cn/problems/tvdfij/
* */
var pivotIndex = function(nums) {
    let pre = [], tem = 0
    for (let i = 0; i < nums.length; i ++){
        tem += nums[i]
        pre.push(tem)
    }
    for (let i = 0; i < nums.length; i ++){
        if ((pre[i - 1] || 0) === pre[nums.length - 1] - pre[i]) return i
    }
    return -1
};
console.log(pivotIndex([1,7,3,6,5,6]));
