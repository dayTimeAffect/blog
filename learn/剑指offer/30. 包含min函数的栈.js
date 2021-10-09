/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/27
 */
/*
* https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
* */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = []
    this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if (this.minStack.length === 0 || x <= (this.minStack[this.minStack.length - 1])){
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let tem = this.stack.pop()
    if (tem === this.minStack[this.minStack.length - 1]){
        this.minStack.pop()
    }
    return tem
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
var obj = new MinStack()
obj.push(0)
obj.push(1)
obj.push(0)
obj.min()
obj.pop()
console.log(obj.min());
console.log(obj);