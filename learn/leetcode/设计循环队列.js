/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/2
 */
/*
* https://leetcode.cn/problems/design-circular-queue/
* */
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    /*
    * 创建一个长度为 k 的数组充当循环队列，
    * 使用两个变量 font 和 rear 来充当队列头和队列尾（起始均为 0），
    * 整个过程 font 始终指向队列头部，rear 始终指向队列尾部的下一位置（待插入元素位置）。
    * 两变量始终自增，通过与 k 取模来确定实际位置。
    * */
    this.queue = new Array(k).fill(0)
    this.font = 0
    this.rear = 0
    this.maxLen = k
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()){
        return false
    }
    this.queue[this.rear % this.maxLen] = value
    this.rear ++
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()){
        return false
    }
    this.font ++
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.font % this.maxLen]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[(this.rear - 1) % this.maxLen]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.font === this.rear
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.rear - this.font === this.maxLen
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */