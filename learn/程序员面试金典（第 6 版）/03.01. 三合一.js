/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/15
 */
/*
* https://leetcode.cn/problems/three-in-one-lcci/description/
* 实现一个三合一栈的数据结构，即三个栈共用一个数组
* */
/**
 * @param {number} stackSize
 */
var TripleInOne = function(stackSize) {
    this.indexArr = [-3, -2, -1]
    this.stack = new Array(stackSize * 3).fill(null)
};

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
    if (this.indexArr[stackNum] + 3 < this.stack.length){
        this.indexArr[stackNum] += 3
        this.stack[this.indexArr[stackNum]] = value
    }
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {
    if (this.indexArr[stackNum] < 0) return -1
    let res = this.stack[this.indexArr[stackNum]]
    this.stack[this.indexArr[stackNum]] = null
    this.indexArr[stackNum] -= 3
    return res
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
    if (this.indexArr[stackNum] < 0) return -1
    return this.stack[this.indexArr[stackNum]]
};

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
    return this.indexArr[stackNum] < 0
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */