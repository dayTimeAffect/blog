/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/3
 */
/*
* https://leetcode.cn/problems/XltzEq/
* */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reg = /[^0-9a-zA-Z]/gi
    const tem = s.replace(reg, '').toLowerCase()
    if (tem.length === 0) return true
    let i = 0, j = tem.length - 1
    while (i <= j){
        if (tem[i] === tem[j]){
            i ++
            j --
        }else {
            return false
        }
    }
    return true
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));