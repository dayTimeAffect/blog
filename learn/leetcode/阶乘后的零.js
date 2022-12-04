/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/2
 */
/*
* https://leetcode.cn/problems/factorial-trailing-zeroes/
* */
var trailingZeroes = function(n) {
    // 计算 5 的个数
    let count_5 = 0;
    while (n !== 0){
        n = Math.floor(n / 5)
        count_5 += n
    }
    return count_5
};
console.log(trailingZeroes(10));