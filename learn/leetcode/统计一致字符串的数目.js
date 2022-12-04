/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/8
 */
/*
* https://leetcode.cn/problems/count-the-number-of-consistent-strings/
* */
var countConsistentStrings = function(allowed, words) {
    let map = new Set(allowed.split('')), count = 0
    for (const v of words){
        let flag = true
        for (let i = 0; i < v.length; i ++){
            if (!map.has(v[i])) {
                flag = false
                break;
            }
        }
        if (flag) count ++
    }
    return count
};
var countConsistentStrings = function(allowed, words) {
    let map = new Array(26), count = words.length
    for (let i = 0; i < allowed.length; i ++){
        map[allowed.charCodeAt(i) - 97] = 1
    }
    for (const v of words){
        for (let i = 0; i < v.length; i ++){
            if (!map[v.charCodeAt(i) - 97]) {
                count --
                break;
            }
        }
    }
    return count
};