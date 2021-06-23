/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/23
 */
/*
* https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
* */
var hammingWeight = function(n) {
    let res = 0, nBinaryStr = Number(n).toString(2)
    for (let i = 0; i < nBinaryStr.length; i ++) {
        if (nBinaryStr[i] === '1') res ++
    }
    return res
};
var hammingWeight = function(n) {
    // 位运算
    let res = 0
    while (n !== 0){
        if (n & 1 === 1) res ++
        n = n >>> 1
    }
    return res
};
console.log(hammingWeight(7));
console.log();