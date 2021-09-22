/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/22
 */
/*
* https://leetcode-cn.com/problems/valid-palindrome/
* */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^0-9|a-z]+/g, '')
    let left = 0, right = s.length - 1
    while (left <= right){
        if (s[left] !== s[right]){
            return false
        }
        left ++
        right --
    }
    return true
};
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
console.log(isPalindrome("ab_a.._"));