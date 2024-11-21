/**
 * @Author: dayTimeAffect
 * @Date: 2024/4/23
 */
/*
* https://leetcode.cn/problems/shortest-supersequence-lcci/description/
* */
/**
 * @param {number[]} big
 * @param {number[]} small
 * @return {number[]}
 */
var shortestSeq = function(big, small) {
    let res = [], tem = new Map(), count = 0, minLen = big.length, temJ = 0
    for (let i = 0; i < small.length; i ++){
        tem.set(small[i], 0)
    }
    for (let i = 0; i < big.length; i ++){
        if (tem.has(big[i])){
            if (tem.get(big[i]) === 0) count ++
            tem.set(big[i], tem.get(big[i]) + 1)
        }
        if (count === small.length){
            let j = temJ
            while (count === small.length){
                if (i - j < minLen){
                    minLen = i - j
                    res = [j, i]
                }
                if (tem.has(big[j])){
                    if (tem.get(big[j]) === 1) count --
                    tem.set(big[j], tem.get(big[j]) - 1)
                }
                j ++
            }
            temJ = j
        }

    }
    return res
};
// console.log(shortestSeq([1, 2, 3], [2]));
// console.log(shortestSeq([1, 2, 3], [4]));
console.log(shortestSeq([7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7], [1,5,9]));