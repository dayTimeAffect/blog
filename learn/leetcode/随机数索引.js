/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/25
 */
/*
* https://leetcode-cn.com/problems/random-pick-index/
* */
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.pos = new Map();
    for (let i = 0; i < nums.length; ++i) {
        if (!this.pos.has(nums[i])) {
            this.pos.set(nums[i], []);
        }
        this.pos.get(nums[i]).push(i);
    }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const tem = this.pos.get(target)
    return tem[Math.floor(Math.random() * tem.length)]
};