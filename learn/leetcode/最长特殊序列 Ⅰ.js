/**
 * @Author: dayTimeAffect
 * @Date: 2022/6/27
 */
/*
* https://leetcode.cn/problems/longest-uncommon-subsequence-i/
* */
var findLUSlength = function(a, b) {
    if (a.length === b.length) return a === b ? -1 : a.length
    return Math.max(a.length, b.length)
};