/**
 * @Author: dayTimeAffect
 * @Date: 2023/12/13
 */
/*
* https://leetcode.cn/problems/lexicographically-smallest-palindrome/?envType=daily-question&envId=2023-12-13
* */
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    if (s.length <= 1) return s
    let left = 0, right = s.length - 1, temS = s.split('')
    while (left < right){
        if (temS[left] !== temS[right]){
            if (temS[left] < temS[right]){
                temS[right] = temS[left]
            }else {
                temS[left] = temS[right]
            }
        }
        left ++
        right --
    }
    return temS.join('')
};
console.log(makeSmallestPalindrome("egcfe"));
console.log(makeSmallestPalindrome("abcd"));