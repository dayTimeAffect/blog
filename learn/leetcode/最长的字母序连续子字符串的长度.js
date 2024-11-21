/**
 * @Author: dayTimeAffect
 * @Date: 2024/9/19
 */
/*
* https://leetcode.cn/problems/length-of-the-longest-alphabetical-continuous-substring/description/?envType=daily-question&envId=2024-09-19
* */
/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
    let res = 1, tem = 1, flag = false
    for (let i = 1; i < s.length; i ++){
        if (s[i].charCodeAt(0) === (s[i - 1].charCodeAt(0) + 1)){
            tem ++
        }else {
            flag = true
        }
        if (i === s.length - 1 || flag){
            res = Math.max(res, tem)
            tem = 1
            flag = false
        }
    }
    return res
};
console.log(longestContinuousSubstring('abacaba'));
console.log(longestContinuousSubstring('abcde'));
console.log(longestContinuousSubstring('abcdefghijklmnopqrstuvwxyz'));