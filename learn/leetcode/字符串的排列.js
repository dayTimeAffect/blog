/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/22
 */
/*
* https://leetcode-cn.com/problems/permutation-in-string/
* */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    const len1 = s1.length, len2 = s2.length
    let count1 = new Array(26).fill(0)
    let count2 = new Array(26).fill(0)
    for (let i = 0; i < len1; i ++){
        count1[s1[i].charCodeAt() - 'a'.charCodeAt()] ++
        count2[s2[i].charCodeAt() - 'a'.charCodeAt()] ++
    }
    if (count1.toString() === count2.toString()) return true
    for (let i = len1; i < len2; i ++){
        count2[s2[i].charCodeAt() - 'a'.charCodeAt()] ++
        count2[s2[i - len1].charCodeAt() - 'a'.charCodeAt()] --
        if (count1.toString() === count2.toString()) return true
    }
    return false
};
console.log(checkInclusion("ab", "eidbaooo"));
