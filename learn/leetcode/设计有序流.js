/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/16
 */
/*
* https://leetcode.cn/problems/design-an-ordered-stream/
* */
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.list = new Array(n + 1).fill(0)
    this.cur = 1
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let res = []
    this.list[idKey] = value
    while (this.list[this.cur]){
        res.push(this.list[this.cur ++])
    }
    return res
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */