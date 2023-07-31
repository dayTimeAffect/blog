/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/24
 */
/*
* https://leetcode.cn/problems/qIsx9U/
* */
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size
    this.queue = new Array()
    this.curVal = 0
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.curVal += val
    this.queue.push(val)
    if (this.queue.length > this.size){
        this.curVal -= this.queue.shift()
    }
    return this.curVal / this.queue.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */