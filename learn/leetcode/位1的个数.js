/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/29
 */
/*
* https://leetcode-cn.com/problems/number-of-1-bits/
* */
var hammingWeight = function(n) {
    let res = 0
    while (n){
        n = n & (n - 1)
        res ++
    }
    return res
};