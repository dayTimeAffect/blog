/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/17
 */
/*
* https://leetcode.cn/problems/number-of-matching-subsequences/
* */
var numMatchingSubseq = function(s, words) {
    const map = [], mapSum = {}
    for (let i = 0; i < words.length; i ++){
        if (mapSum[words[i]]){
            mapSum[words[i]] ++
        }else {
            mapSum[words[i]] = 1
            map.push(words[i])
        }
    }
    let tem = new Array(map.length).fill(0), res = 0
    for (let i = 0; i < s.length; i ++){
        for (let j = 0; j < map.length; j ++){
            if (s[i] === map[j][tem[j]]){
                tem[j] ++
            }
        }
    }
    for (let i = 0; i < map.length; i ++){
        if (tem[i] === map[i].length) res += mapSum[map[i]]
    }
    return res
};
var numMatchingSubseq = function(s, words) {
    const charPointMap = {}, wordsMap = [], wordsMapSum = {}
    let res = 0
    for (let i = 0; i < s.length; i ++){
        if (charPointMap[s[i]]){
            charPointMap[s[i]].push(i)
        }else {
            charPointMap[s[i]] = [i]
        }
    }
    for (let i = 0; i < words.length; i ++){
        if (wordsMapSum[words[i]]){
            wordsMapSum[words[i]] ++
        }else {
            wordsMapSum[words[i]] = 1
            wordsMap.push(words[i])
        }
    }
    const isSubsequence = (word) => {
        let curPoint = -1, flag = false
        for (let i = 0; i < word.length; i ++){
            flag = false
            const point = charPointMap[word[i]]
            if (point){
                for (let j = 0; j < point.length; j ++){
                    if (point[j] > curPoint){
                        flag = true
                        curPoint = point[j]
                        break;
                    }
                }
                if (!flag){
                    return false
                }
            }else {
                return false
            }
        }
        return true
    }
    for (let i = 0; i < wordsMap.length; i ++){
        if (isSubsequence(wordsMap[i])){
            res += wordsMapSum[wordsMap[i]]
        }
    }
    return res
};
console.log(numMatchingSubseq('abcde', ["a","bb","acd","ace"]));
console.log(numMatchingSubseq('dsahjpjauf', ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]));