/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/26
 */
/*
* https://leetcode.cn/problems/remove-duplicate-letters/description/
* */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let map = {}, res = [], resMap = {}
    for (let i = 0; i < s.length; i ++){
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]] ++
        }
    }
    for (let i = 0; i < s.length; i ++){
        const cur = s[i]
        if (!resMap[s[i]]){
            while (res.length && res[res.length - 1] > cur){
                if (map[res[res.length - 1]] > 0){
                    resMap[res[res.length - 1]] = false
                    res.pop()
                }else {
                    break;
                }
            }
            resMap[cur] = true
            res.push(cur)
        }
        map[cur] --
    }
    return res.join('')
};
console.log(removeDuplicateLetters("cbacdcbc")) // acdb
console.log(removeDuplicateLetters("cdadabcc")) // adbc
// console.log(removeDuplicateLetters("bbcaac")) //bac
// console.log(removeDuplicateLetters("bddbccd")) //bcd
