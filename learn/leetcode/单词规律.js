/**
 * @Author: dayTimeAffect
 * @Date: 2022/5/19
 */
/*
* https://leetcode.cn/problems/word-pattern/
* */
var wordPattern = function(pattern, s) {
    let temArr = s.split(" "), len = pattern.length, map1 = {}, map2 = {}
    if (temArr.length !== len) return false
    for (let i = 0; i < len; i ++){
        if (map1[pattern[i]]){
            if (map1[pattern[i]] !== temArr[i]) return false
        }
        if (map2[temArr[i]]){
            if (map2[temArr[i]] !== pattern[i]) return false
        }
        map1[pattern[i]] = temArr[i]
        map2[temArr[i]] = pattern[i]
    }
    return true
};
console.log(wordPattern('abba', "dog cat cat dog"));