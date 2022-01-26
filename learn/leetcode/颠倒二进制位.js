/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/26
 */
/*
* https://leetcode-cn.com/problems/reverse-bits/
* */
var reverseBits = function(n) {
    let res = 0
    for (let i = 0; i < 32 && n > 0; i ++){
        /**
         * n & 1 获取n末尾的一位
         * 1 & 1 返回 1
         * 0 & 1 返回 0
         * 然后放大 左移31 - i位，从最低位变成最高位！！！
         */
        res |= (n & 1) << (31 - i)
        /**
         * 每次循环后 n向右移一位即缩小一倍！
         */
        n >>>= 1
    }
    return res >>> 0
};
