/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/11
 */
/*
* https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value/
* */
var digitCount = function(num) {
    let map = new Array(11).fill(0)
    for (let i = 0; i < num.length; i ++){
        map[num[i]] ++
    }
    for (let i = 0; i < num.length; i ++){
        if (map[i] !== num[i] / 1) return false
    }
    return true
};
console.log(digitCount('1210'));
console.log(digitCount('030'));