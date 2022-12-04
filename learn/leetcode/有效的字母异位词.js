/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/30
 */
/*
* https://leetcode.cn/problems/valid-anagram/
* */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let map = new Array(26).fill(0)
    for (let i = 0; i < s.length; i ++){
        map[s[i].charCodeAt(0) - 97] ++
        map[t[i].charCodeAt(0) - 97] --
    }
    return map.every(v => v === 0)
};