/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/14
 */
/*
* https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/
* */
var trimMean = function(arr) {
    let len = arr.length, removeCount = len * 0.05
    arr.sort((a, b) => a - b)
    return arr.slice(removeCount, len - removeCount).reduce((sum, cur) => {
        return sum + cur
    }, 0) / (len - removeCount * 2)
};
console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]));