/**
 * @Author: dayTimeAffect
 * @Date: 2024/8/1
 */
/*
* https://leetcode.cn/problems/guess-numbers/description/
* */
/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    return guess.reduce(([sum, i], cur) =>{
        if (cur === answer[i]){
            return [sum + 1, i + 1]
        }
        return [sum, i + 1]
    }, [0, 0])[0]
};
console.log(game([1,2,3],[1,2,3]))