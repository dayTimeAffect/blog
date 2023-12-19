/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/21
 */
/*
* https://leetcode.cn/problems/is-unique-lcci/
* */
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    let map = {}, flag = false
    for (let i = 0; i < astr.length; i ++){
        if (map[astr[i]]) {
            flag = true
            break;
        }
        map[astr[i]] = true
    }
    return !flag
};