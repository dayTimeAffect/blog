/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/23
 */
/*
* https://leetcode-cn.com/problems/buddy-strings/
* */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length || s.length < 2 || goal.length < 2) return false
    let s_map = new Array(26).fill(0), goal_map = new Array(26).fill(0), len = s.length
    let isRepeatCode = false
    let isSame = true
    let record = []
    for (let i = 0; i < len; i ++){
        s_map[s.charCodeAt(i) - 97] ++
        goal_map[goal.charCodeAt(i) - 97] ++
        if (s[i] !== goal[i]){
            isSame = false
            record.push(i)
        }
    }
    for (let i = 0; i < 26; i ++) if (s_map[i] >= 2 && s_map[i] === goal_map[i]) isRepeatCode = true;
    return isSame ? isRepeatCode : record.length === 2 ? s[record[0]] === goal[record[1]] && s[record[1]] === goal[record[0]] : false
};
console.log(buddyStrings('ab', 'ba'));
console.log(buddyStrings('ab', 'ab'));