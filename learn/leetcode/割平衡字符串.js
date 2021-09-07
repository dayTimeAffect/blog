/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/7
 */
/*
* https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/
* */
var balancedStringSplit = function(s) {
    let left = 0, right = 0, balance = 0, len = s.length, count = 0
    for (let i = 0; i < len; i ++, right ++){
        s[i] === 'L' ? balance ++ : balance --
        if (!balance && left !== right){
            count ++
            left = i + 1
        }
    }
    return count
};
console.log(balancedStringSplit('RLLLLRRRLR'));
console.log(balancedStringSplit('LLLLRRRR'));
console.log(balancedStringSplit('RLRRRLLRLL'));