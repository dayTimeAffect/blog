/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/22
 */
/*
* https://leetcode.cn/problems/sort-of-stacks-lcci/
* */

var SortedStack = function() {
    this.stack = []
};

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {
    if (this.stack.length === 0) {
        this.stack.push(val)
        return
    }
    let temp = []
    while (this.stack.length && this.stack[this.stack.length - 1] < val){
        temp.push(this.stack.pop())
    }
    this.stack.push(val)
    while (temp.length){
        this.stack.push(temp.pop())
    }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {
    return this.stack[this.stack.length - 1] || -1
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {
    return this.stack.length === 0
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */