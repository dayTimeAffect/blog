/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/15
 */
/*
* https://leetcode.cn/problems/min-stack-lcci/description/
* */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.stack.length === 0){
        this.stack.push([x, x])
    }else{
        this.stack.push([x, Math.min(this.stack[this.stack.length - 1][1], x)])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */