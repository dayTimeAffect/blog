/**
 * @Author: dayTimeAffect
 * @Date: 2024/7/4
 */
/*
* https://leetcode.cn/problems/detect-capital/description/
* */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length <= 1) return true
    let flag = word[0].charCodeAt(0) < 97 ? (word[1].charCodeAt(0) < 97 ? 1 : 2) : (word[1].charCodeAt(0) < 97 ? 4 : 3)
    if (flag === 4) return false
    // 1 全大写，2 首字母大写，3 全小写 4 false
    for (let i = 2; i < word.length; i ++){
        if (word[i].charCodeAt(0) < 97 && flag === 1) continue
        if (word[i].charCodeAt(0) >= 97 && (flag === 2 || flag === 3)) continue
        return false
    }
    return true
};