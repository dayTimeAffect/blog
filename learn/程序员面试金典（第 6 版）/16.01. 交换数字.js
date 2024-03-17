/**
 * @Author: dayTimeAffect
 * @Date: 2024/2/23
 */
/*
* https://leetcode.cn/problems/swap-numbers-lcci/description/
* */
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function(numbers) {
    numbers[0] = numbers[0] + numbers[1]
    numbers[1] = numbers[0] - numbers[1]
    numbers[0] = numbers[0] - numbers[1]
    return numbers
};
var swapNumbers = function(numbers) {
    numbers[0] = numbers[0] ^ numbers[1]
    numbers[1] = numbers[0] ^ numbers[1]
    numbers[0] = numbers[0] ^ numbers[1]
    return numbers
};