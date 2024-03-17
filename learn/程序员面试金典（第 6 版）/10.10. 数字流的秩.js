/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/23
 */
/*
* https://leetcode.cn/problems/rank-from-stream-lcci/
* */

var StreamRank = function() {
    this.numMap = {}
    this.numArr = []
};

/**
 * @param {number} x
 * @return {void}
 */
StreamRank.prototype.track = function(x) {
    if (this.numMap[x]){
        this.numMap[x] ++
        return
    }
    this.numMap[x] = (this.numMap[x] || 0) + 1
    let left = 0, right = this.numArr.length - 1
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if (this.numArr[mid] === x){
            this.numArr.splice(mid, 0, x)
            break
        }
        if (this.numArr[mid] < x){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    if (left < 0){
        this.numArr.unshift(x)
    }else if (left > this.numArr.length - 1){
        this.numArr.push(x)
    }else {
        this.numArr.splice(left, 0, x)
    }

};

/**
 * @param {number} x
 * @return {number}
 */
StreamRank.prototype.getRankOfNumber = function(x) {
    let res = 0
    for (let i = 0; i < this.numArr.length; i ++){
        if (this.numArr[i] <= x){
            res += this.numMap[this.numArr[i]] || 0
        }else {
            break
        }
    }
    return res
};

/**
 * Your StreamRank object will be instantiated and called as such:
 * var obj = new StreamRank()
 * obj.track(x)
 * var param_2 = obj.getRankOfNumber(x)
 */
var obj = new StreamRank()
obj.track(4)
obj.track(5)
obj.track(4)
obj.track(4)
obj.track(2)
obj.track(8)
obj.track(6)
obj.track(8)
console.log(obj, obj.getRankOfNumber(6));
