/**
 * @Author: dayTimeAffect
 * @Date: 2024/11/7
 */
/*
* https://leetcode.cn/problems/range-sum-query-immutable/description/
* */
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let pre = [0], tem = 0
    for (let i = 0; i < nums.length; i ++){
        tem += nums[i]
        pre.push(tem)
    }
    this.pre = pre
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.pre[right + 1] - this.pre[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */