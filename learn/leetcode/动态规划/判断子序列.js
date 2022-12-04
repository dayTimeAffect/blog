/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/19
 */
/*
* https://leetcode.cn/problems/is-subsequence/
* */
var isSubsequence = function(s, t) {
    let i = 0, j = 0
    while (i < s.length && j < t.length){
        if (s[i] === t[j]){
            i ++
        }
        j ++
    }
    return i === s.length
};
var isSubsequence = function(s, t) {
    let m = s.length, n = t.length
    let dp = new Array(m + 1).fill(0).map(v => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i ++){
        for (let j = 1; j <= n; j ++){
            if (s[i - 1] === t[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1
            }else {
                dp[i][j] = dp[i][j - 1]
            }
        }
    }
    console.log(dp);
    return dp[m][n] === m
};
console.log(isSubsequence("abc","ahbgdc"));