/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/4
 */
/*
* https://leetcode.cn/problems/draw-line-lcci/
* */
/**
 * @param {number} length
 * @param {number} w
 * @param {number} x1
 * @param {number} x2
 * @param {number} y
 * @return {number[]}
 */
var drawLine = function(length, w, x1, x2, y) {
    let res = new Array(length).fill(0)
    for (let i = x1; i <= x2; i ++){
        let index = w * y + i
        res[Math.floor(index / 32)] |= 1 << (31 - index % 32)
    }
    return res
};