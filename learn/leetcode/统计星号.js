/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/29
 */
/*
* https://leetcode.cn/problems/count-asterisks/
* */
var countAsterisks = function(s) {
    let count = 0,flag = false
    for (let i = 0; i < s.length; i ++){
        if (s[i] === '|'){
            flag = !flag
        }
        if (!flag && s[i] === '*') {
            count ++
        }
    }
    return count
};
console.log(countAsterisks("l|*e*et|c**o|*de|"));
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));