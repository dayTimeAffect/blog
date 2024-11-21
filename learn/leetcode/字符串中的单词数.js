/**
 * @Author: dayTimeAffect
 * @Date: 2024/9/12
 */
/*
* https://leetcode.cn/problems/number-of-segments-in-a-string/description/
* */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s += ' '
    let count = 0, flag = false
    for (let i = 0; i < s.length; i ++){
        if (s[i] !== ' '){
            flag = true
        }else if (s[i] === ' ' && flag){
            count ++
            flag = false
        }
    }
    return count
};