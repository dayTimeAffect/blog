/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/18
 */
/*
* https://leetcode.cn/problems/hanota-lcci/description/
* */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function(A, B, C) {
    const move = (n, A, B, C) => {
        if (n === 1) {
            C.push(A.pop())
            return ;
        }
        move(n - 1, A, C, B)
        C.push(A.pop())
        move(n - 1, B, A, C)
    }
    move(A.length, A, B, C)
};