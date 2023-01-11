/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/3
 */
/*
* https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence/
* */
var areNumbersAscending = function(s) {
    let number = s.match(/\d+/g)
    if (number){
        for (let i = 1; i < number.length; i ++){
            if (number[i] / 1 <= number[i - 1] / 1) return false
        }
    }
    return true
};
console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));
console.log(areNumbersAscending("box has"));