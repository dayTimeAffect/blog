/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/27
 */
/*
* https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
* */
var CQueue = function() {
    this.addStack = []
    this.removeStack = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.addStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.removeStack.length === 0){
        while (this.addStack.length){
            this.removeStack.push(this.addStack.pop())
        }
    }
    if (this.removeStack.length === 0) return -1
    return this.removeStack.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */