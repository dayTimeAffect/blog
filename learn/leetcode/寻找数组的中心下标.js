/**
 * @Author: dayTimeAffect
 * @Date: 2024/10/9
 */
/*
* https://leetcode.cn/problems/find-pivot-index/description/?envType=problem-list-v2&envId=array&difficulty=EASY
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pre = [], tem = 0
    for (let i = 0; i < nums.length; i ++){
        tem += nums[i]
        pre.push(tem)
    }
    if (pre.length === 1) return 0
    if (pre[pre.length - 1] - pre[0] === 0) return 0
    for (let i = 1; i < pre.length; i ++){
        if (pre[i - 1] === (pre[pre.length - 1] - pre[i])){
            return i
        }
    }
    return -1
};
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([-1,-1,-1,1,1,1]));
// console.log(pivotIndex([-1,-1,1,1,0,0]));
console.log(pivotIndex([-1,-1,0,1,1,0]));