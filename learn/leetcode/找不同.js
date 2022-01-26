/**
 * @Author: dayTimeAffect
 * @Date: 2022/1/17
 */
/*
* https://leetcode-cn.com/problems/find-the-difference/
* */
var findTheDifference = function(s, t) {
    let map = new Array(26).fill(0)
    let len = Math.max(s.length, t.length)
    for (let i = 0; i < len; i ++){
        s[i] && map[s[i].charCodeAt(0) - 97] ++
        t[i] && map[t[i].charCodeAt(0) - 97] --
    }
    return String.fromCharCode(map.findIndex((v, i) => v < 0) + 97)
};
console.log(findTheDifference('abcd', 'abcde'));