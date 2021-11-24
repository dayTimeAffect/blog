/**
 * @Author: dayTimeAffect
 * @Date: 2021/11/1
 */
/*
* https://leetcode-cn.com/problems/interleaving-string/
* */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false
    const dfs = (index1, index2, index3) => {
        if (index1 + index2 === s3.length) return true
        if (s3[index3] !== s1[index1] && s3[index3] !== s2[index2]) return false
        if (s3[index3] === s1[index1] && s3[index3] === s2[index2]) return dfs(index1 + 1, index2, index3 + 1) || dfs(index1, index2 + 1, index3 + 1)
        if (s3[index3] === s1[index1]) return dfs(index1 + 1, index2, index3 + 1)
        if (s3[index3] === s2[index2]) return dfs(index1, index2 + 1, index3 + 1)
    }
    return dfs(0, 0, 0)
};
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false
    let m = s1.length, n = s2.length
    let dp = []
    for (let i = 0; i <= m; i ++) dp.push(new Array(n).fill(false))
    dp[0][0] = true
    for (let i = 0; i <= m; i ++){
        for (let j = 0; j <= n; j ++){
            if (i > 0){
                dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1])
            }
            if (j > 0){
                dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
            }
        }
    }
    return dp[m][n]
};
console.log(isInterleave('qetyu', 'wriop', 'qwertyuiop'));
// console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
// console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));