/**
 * @Author: dayTimeAffect
 * @Date: 2023/5/4
 */
/*
* https://leetcode.cn/problems/dKk3P7/
* */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    if (s === t) return false
    let map = new Array(26).fill(0), len = s.length
    for (let i = 0; i < len; i ++){
        map[s[i].charCodeAt(0) - 97] ++
        map[t[i].charCodeAt(0) - 97] --
    }
    return !map.find(v => v !== 0)
};
console.log(isAnagram('a', 'a'));