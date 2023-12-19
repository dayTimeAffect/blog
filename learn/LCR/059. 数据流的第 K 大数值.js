/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/5
 */
/*
* https://leetcode.cn/problems/jBjn9C/
* */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.nums = nums
    this.queue = nums.sort((a, b) => b - a).slice(0, k)
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    const i = this.queue.findIndex(v => v < val)
    if (i === -1){
        this.queue.push(val)
    }else {
        this.queue.splice(i, 0, val)
    }
    return this.queue[this.k - 1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */