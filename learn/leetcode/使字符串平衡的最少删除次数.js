/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/6
 */
/*
* https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced/
* */
var minimumDeletions = function(s) {
    let res = 0, countB = 0
    for (let i = 0; i < s.length; i ++){
        if (s[i] === 'b') countB ++
        else {
            res = Math.min(res + 1, countB) // 取删除a 与 保留a但删除前面b的最小值
        }
    }
    return res
};