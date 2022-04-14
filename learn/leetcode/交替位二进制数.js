/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/28
 */
/*
* https://leetcode-cn.com/problems/binary-number-with-alternating-bits/
* */
var hasAlternatingBits = function(n) {
    //n 与 n >> 1 进行异或运算，若 n 为交替位二进制数，那么tem的二进制必然每一位都是1
    //若tem二进制每一位都为1 ，那么tem + 1，则是最高位为1，其余位为0，所以tem & tem + 1必然为0
    const tem = n ^ (n >> 1)
    return (tem & (tem + 1)) === 0
};
console.log(hasAlternatingBits(5));