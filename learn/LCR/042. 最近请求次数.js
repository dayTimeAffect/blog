/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/24
 */
/*
* https://leetcode.cn/problems/H8086Q/
* */
var RecentCounter = function() {
    this.pingArr = new Array()
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.pingArr.push(t)
    while (this.pingArr[0] + 3000 < t){
        this.pingArr.shift()
    }
    return this.pingArr.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */