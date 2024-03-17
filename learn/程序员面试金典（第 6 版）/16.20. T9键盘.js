/**
 * @Author: dayTimeAffect
 * @Date: 2024/3/11
 */
/*
* https://leetcode.cn/problems/t9-lcci/description/
* */
/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
var getValidT9Words = function(num, words) {
    let res = [], chars = ['' , '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const charsMap = {};
    for (let i = 0; i < chars.length; i ++){
        for (let j = 0; j < chars[i].length; j ++){
            charsMap[chars[i][j]] = i
        }
    }
    for (let i = 0; i < words.length; i ++){
        if (words[i].length !== num.length) continue;
        let flag = true
        for (let j = 0; j < num.length; j ++){
            if (charsMap[words[i][j]] !== Number(num[j])){
                flag = false
                break
            }
        }
        if (flag) res.push(words[i])
    }
    return res
};