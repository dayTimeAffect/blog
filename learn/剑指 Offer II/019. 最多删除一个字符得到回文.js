/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/3
 */
/*
* https://leetcode.cn/problems/RQku0D/
* */
var validPalindrome = function(s) {
    if (s.length <= 2) return true
    const isPalindrome = (i, j, s) => {
        while (i <= j){
            if (s[i] !== s[j]) return false
            i ++
            j --
        }
        return true
    }
    let i = 0, j = s.length - 1
    while (i <= j){
        if (s[i] !== s[j]){
            return isPalindrome(i + 1, j, s) || isPalindrome(i, j - 1, s)
        }
        i ++
        j --
    }
    return true
};
console.log(validPalindrome("abca"));