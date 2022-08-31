/**
 * @Author: dayTimeAffect
 * @Date: 2022/8/11
 */
/*
* https://leetcode.cn/problems/reformat-the-string/
* */
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let letterS = '', numberS = '', len = s.length, res = ''
    for (let i = 0; i < len; i ++){
        if (s[i].charCodeAt(0) <= 57){
            numberS += s[i]
        }else {
            letterS += s[i]
        }
    }
    if (Math.abs(letterS.length - numberS.length) > 1) return res
    let flag = letterS.length >= numberS.length
    for (let i = 0, j = 0; i < letterS.length || j < numberS.length;){
        if (flag){
            res += letterS[i]
            i ++
        }else {
            res += numberS[j]
            j ++
        }
        flag = !flag
    }
    return res
};
// console.log(reformat("a0b1c2"));
// console.log(reformat("leetcode"));
// console.log(reformat("covid2019"));
console.log(reformat("ab123"));
// console.log(reformat("abc12"));