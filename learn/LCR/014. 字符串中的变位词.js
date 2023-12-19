/**
 * @Author: dayTimeAffect
 * @Date: 2023/3/20
 */
/*
* https://leetcode.cn/problems/MPnaiL/
* */
var checkInclusion = function(s1, s2) {
    let n = s1.length, m = s2.length
    if (n > m) return false
    let countS1Map = new Array(26).fill(0)
    let countMap = new Array(26).fill(0)
    for (let i = 0; i < n; i ++){
        countS1Map[s1[i].charCodeAt(0) - 97] ++
        countMap[s2[i].charCodeAt(0) - 97] ++
    }
    if (countS1Map.toString() === countMap.toString()) return true;
    for (let i = n; i < m; i ++){
        countMap[s2[i].charCodeAt(0) - 97] ++
        countMap[s2[i - n].charCodeAt(0) - 97] --
        if (countS1Map.toString() === countMap.toString()) return true;
    }
    return false
};
// console.log(checkInclusion("ab", "eidbaooo"));
// console.log(checkInclusion("ab", "eidboaooo"));
console.log(checkInclusion("adc", "dcda"));