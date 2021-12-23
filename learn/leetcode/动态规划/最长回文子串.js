/**
 * @Author: dayTimeAffect
 * @Date: 2021/12/9
 */
/*
* https://leetcode-cn.com/problems/longest-palindromic-substring/
* */
var longestPalindrome = function(s) {
    let maxLen = 1, maxS = s[0], len = s.length
    let f = new Array(len).fill(0).map(v => new Array(len).fill(1))
    for (let i = len - 1; i >= 0; i --){
        for (let j = i + 1; j < len; j ++){
            f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1] ? j - i + 1 : 0
            if (f[i][j] > maxLen) {
                maxLen = f[i][j]
                maxS = s.slice(i, j + 1)
            }
        }
    }
    return maxS
};
// console.log(longestPalindrome('ac'));
// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome('babad'));
console.log(longestPalindrome('"aacabdkacaa"'));