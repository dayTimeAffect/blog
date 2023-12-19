/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/7
 */
/*
* https://leetcode.cn/problems/cuyjEf/description/
* */
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    const pre = new Array(w.length).fill(0)
    pre[0] = w[0]
    for (let i = 1; i < w.length; i ++){
        pre[i] = w[i] + pre[i - 1]
    }
    this.pre = pre
    this.total = pre[w.length - 1]
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const x = Math.floor((Math.random() * this.total)) + 1
    const binarySearch = (x) => {
        let left = 0, right = this.pre.length - 1
        while (left < right){
            let mid = Math.floor((left + right) / 2)
            if (this.pre[mid] < x){
                left = mid + 1
            }else {
                right = mid
            }
        }
        return left
    }
    return binarySearch(x)
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */