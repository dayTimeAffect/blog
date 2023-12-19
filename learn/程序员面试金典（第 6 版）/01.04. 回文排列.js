/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/21
 */
/*
* https://leetcode.cn/problems/palindrome-permutation-lcci/
* */
var canPermutePalindrome = function(s) {
    let map = {}
    for (let i = 0; i < s.length; i ++){
        if (!map[s[i]]){
            map[s[i]] = 0
        }
        map[s[i]] ++
    }
    return Object.values(map).reduce((count, curV) => {
        if (curV % 2 !== 0) return count + 1
        return count
    }, 0) <= 1
};
console.log(canPermutePalindrome("aa"));
// console.log(canPermutePalindrome("code"));