/**
 * @Author: dayTimeAffect
 * @Date: 2023/11/30
 */
/*
* https://leetcode.cn/problems/determine-if-two-strings-are-close/
* */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false
    let map1 = {}, map2 = {}
    for (let i = 0; i < word1.length; i ++){
        map1[word1[i]] = (map1[word1[i]] || 0) + 1
    }
    for (let i = 0; i < word2.length; i ++){
        map2[word2[i]] = (map2[word2[i]] || 0) + 1
    }
    let keys1 = Object.keys(map1), keys2 = Object.keys(map2)
    let values1 = Object.values(map1), values2 = Object.values(map2)
    keys1.sort((a, b) => a.charCodeAt() - b.charCodeAt())
    keys2.sort((a, b) => a.charCodeAt() - b.charCodeAt())
    values1.sort((a, b) => a - b)
    values2.sort((a, b) => a - b)
    return keys1.toString() === keys2.toString() && values1.toString() === values2.toString()
};
console.log(closeStrings("abc", "bca"));