/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/27
 */
/*
* https://leetcode-cn.com/problems/plus-one/
* */
var plusOne = function(digits) {
    let len = digits.length - 1
    let carryBit = 1
    for (let i = len; i >= 0; i --){
        if (digits[i] + carryBit === 10){
            digits[i] = 0
        }else{
            digits[i] = digits[i] + carryBit
            carryBit = 0
        }
    }
    if (carryBit) return [carryBit, ...digits]
    return [...digits]
};