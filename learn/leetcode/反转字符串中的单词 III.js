/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/9
 */
/*
* https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
* */
var reverseWords = function(s) {
    let words = ''
    let res = ''
    for (let i = 0; i < s.length; i ++){
        if (s[i] === ' '){
            res += words + ' '
            words = ''
        }else{
            words = s[i] + words
        }
    }
    res += words
    return res
};
console.log(reverseWords("Let's take LeetCode contest"));