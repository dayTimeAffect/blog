/**
 * @Author: dayTimeAffect
 * @Date: 2022/9/27
 */
/*
* https://leetcode.cn/problems/check-permutation-lcci/
* */
var CheckPermutation = function(s1, s2) {
    if (s1.length !== s2.length) return false
    let map = {}
    for (let i = 0; i < s1.length; i ++){
        if (map[s1[i]]){
            map[s1[i]] ++
        }else {
            map[s1[i]] = 1
        }
        if (map[s2[i]]){
            map[s2[i]] --
        }else {
            map[s2[i]] = -1
        }
    }
    return !Object.values(map).find(v => v !== 0)
};
console.log(CheckPermutation("abc", "bba"));