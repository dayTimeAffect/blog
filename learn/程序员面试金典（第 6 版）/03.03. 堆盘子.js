/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/15
 */
/*
* https://leetcode.cn/problems/stack-of-plates-lcci/
* */
/**
 * @param {number} cap
 */
var StackOfPlates = function(cap) {
    this.stackArr = []
    this.cap = cap
    this.curIndex = -1
    this.handle = (i) => {
        if (this.stackArr[i] && this.stackArr[i].length === 0){
            this.stackArr.splice(i, 1)
            this.curIndex --
        }
    }
};

/**
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function(val) {
    if (this.cap === 0) return
    if (!this.stackArr[this.curIndex] || this.stackArr[this.curIndex].length === this.cap){
        this.stackArr.push([])
        this.curIndex ++
    }
    this.stackArr[this.curIndex].push(val)
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function() {
    let res = -1
    if (this.curIndex < 0) return res
    if (this.stackArr[this.curIndex].length === 0){
        this.stackArr.pop()
        this.curIndex --
        return this.pop()
    }
    res = this.stackArr[this.curIndex].pop()
    this.handle(this.curIndex)
    return res
};

/**
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function(index) {
    let res = -1
    if (index > this.curIndex) return res
    if (this.stackArr[index].length === 0) {
        this.stackArr.splice(index, 1)
        this.curIndex --
        return this.popAt(index)
    }
    res = this.stackArr[index].pop()
    this.handle(index)
    return res
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */