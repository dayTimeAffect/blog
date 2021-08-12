/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/12
 */
var longestPalindromeSubseq = function(s) {
    let n = s.length
    if (n <= 1) return n
    let dp = []
    for (let i = n - 1; i >= 0; i --){
        dp[i] = new Array(n).fill(0)
        dp[i][i] = 1
        for (let j = i + 1; j < n; j ++){
            if (s[i] === s[j]){
                dp[i][j] = dp[i + 1][j - 1] + 2
            }else{
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[0][n - 1]
}
console.log(longestPalindromeSubseq('bbbab'));