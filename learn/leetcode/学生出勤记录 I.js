/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/17
 */
/*
* https://leetcode-cn.com/problems/student-attendance-record-i/
* */
var checkRecord = function(s) {
    let A = 0, L = 0;
    for (let i = 0; i < s.length; i ++){
        if (s[i] === 'A') {
            A ++
            L = 0
        }
        else if (s[i] === 'L') L ++
        else{
            L = 0
        }
        if (A >= 2 || L >= 3) return false
    }
    return true
};
/*var checkRecord = function(s) {
    return s.split('A').length <= 2 && s.split('LLL').length === 1
};*/
console.log(checkRecord("LALL"));