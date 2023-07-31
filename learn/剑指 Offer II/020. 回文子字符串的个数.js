/**
 * @Author: dayTimeAffect
 * @Date: 2023/4/3
 */
/*
* https://leetcode.cn/problems/a7VOhD/
* */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = s.length, len = s.length
    let dp = new Array(len).fill(0).map(v => new Array(len).fill(true))
    for (let i = len - 1; i >= 0; i --){
        for (let j = i + 1; j < len; j ++){
            dp[i][j] = (s[i] === s[j]) && dp[i + 1][j - 1]
            if (dp[i][j]) count ++
        }
    }
    return count
};
console.log(countSubstrings('abbb'));
console.log(countSubstrings('aaa'));