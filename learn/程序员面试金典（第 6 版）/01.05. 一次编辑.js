/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/10
 */
/*
* https://leetcode.cn/problems/one-away-lcci/
* */
var oneEditAway = function(first, second) {
    if (Math.abs(first.length - second.length) >= 2) return false
    let i = 0, j = 0, flag = false
    while (i < first.length && j < second.length){
        if (first[i] !== second[j]){
            if (flag) return false
            flag = true
            if (first.length > second.length){
                i ++
            }else if (first.length < second.length){
                j ++
            }else {
                i ++
                j ++
            }
            continue;
        }
        i ++
        j ++
    }
    return true
};
// console.log(oneEditAway("pale", "ple"));
console.log(oneEditAway("intention", "execution"));