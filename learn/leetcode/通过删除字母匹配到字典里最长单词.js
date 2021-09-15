/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/14
 */
/*
* https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/
* */
var findLongestWord = function(s, dictionary) {
    let len = s.length, n = dictionary.length, maxLenWord = '', maxLen = 0
    let record = new Array(n).fill(0)
    for (let i = 0; i < len; i ++){
        for (let j = 0; j < n; j ++){
            if (s[i] === dictionary[j][record[j]]){
                record[j] ++
            }
        }
    }
    for (let i = 0; i < n; i ++){
        if (record[i] === dictionary[i].length && record[i] >= maxLenWord.length){
            maxLenWord = record[i] === maxLenWord.length ? (dictionary[i] > maxLenWord ? maxLenWord : dictionary[i]) : dictionary[i]
        }
    }
    return maxLenWord
};
// 优化
var findLongestWord = function(s, dictionary) {
    let len = s.length, n = dictionary.length, maxLenWord = ''
    for (let i = 0; i < n; i ++){
        if (dictionary[i].length < maxLenWord.length) continue;
        let index = 0, flag = false
        for (let j = 0; j < len; j ++){
            if (s[j] === dictionary[i][index]) index ++
            if (index === dictionary[i].length) {
                flag = true
                break;
            }
        }
        if (flag && ((index === maxLenWord.length && dictionary[i] < maxLenWord) || index > maxLenWord.length)) maxLenWord = dictionary[i]
    }
    return maxLenWord
};
console.log(findLongestWord('abpcplea', ["ale","apple","monkey","plea"]));
console.log(findLongestWord('abpcplea', ["a","b","c"]));
console.log(findLongestWord('bab', ["ba","ab","a","b"]));