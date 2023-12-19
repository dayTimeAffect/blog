/**
 * @Author: dayTimeAffect
 * @Date: 2023/8/21
 */
/*
* https://leetcode.cn/problems/move-pieces-to-obtain-a-string/description/
* */
var canChange = function(start, target) {
    start = 'L' + start + 'R'
    target = 'L' + target + 'R'
    let s_i = 0, t_i = 0, len = start.length
    while (s_i < len || t_i < len){
        if (start[s_i] === '_'){
            s_i ++
            continue;
        }
        if (target[t_i] === '_'){
            t_i ++
            continue;
        }
        if (start[s_i] !== target[t_i]){
            return false
        }
        if (start[s_i] === 'L'){
            if (s_i < t_i) return false
            s_i ++
            t_i ++
            continue;
        }
        if (start[s_i] === 'R'){
            if (s_i > t_i) return false;
            s_i ++
            t_i ++
            continue;
        }
    }
    return true
};
console.log(canChange('_L__R__R_', 'L______RR'));
console.log(canChange('R_L_', '__LR'));
console.log(canChange('_R', 'R_'));
console.log(canChange('_L__R__R_L', 'L______RR_'));
console.log(canChange('R_L__R__R_', '_L______RR'));
console.log(canChange('R', '_'));