/**
 * @Author: dayTimeAffect
 * @Date: 2023/10/19
 */
/*
* https://leetcode.cn/problems/string-rotation-lcci/
* */
var isFlipedString = function(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    const len = s1.length
    for (let i = 0; i < len; i ++){
        if ((s1.substring(i + 1, len) + s1.substring(0, i + 1)) === s2){
            return true
        }
    }
    return false
};
console.log(isFlipedString("waterbottle", "erbottlewat"));
