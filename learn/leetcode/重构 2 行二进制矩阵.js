/**
 * @Author: dayTimeAffect
 * @Date: 2023/6/29
 */
/*
* https://leetcode.cn/problems/reconstruct-a-2-row-binary-matrix/
* */
/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    let res = [[], []]
    for (let i = 0; i < colsum.length; i ++){
        res[0][i] = 0
        res[1][i] = 0
        if (colsum[i] === 2){
            res[0][i] = 1
            res[1][i] = 1
            upper --
            lower --
        }
    }
    if (upper < 0 || lower < 0) return []
    for (let i = 0; i < colsum.length; i ++){
        if(colsum[i] === 1){
            if (upper > 0){
                upper --
                res[0][i] = 1
            }else if (lower > 0){
                lower --
                res[1][i] = 1
            } else {
                return []
            }
        }
    }
    return (upper || lower) ? [] : res
};
console.log(reconstructMatrix(5, 5, [2,1,2,0,1,0,1,2,0,1]));
