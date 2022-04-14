/**
 * @Author: dayTimeAffect
 * @Date: 2022/4/6
 */
/*
* https://leetcode-cn.com/problems/delete-operation-for-two-strings/
* */
var minDistance = function(word1, word2) {
    const len1 = word1.length + 1, len2 = word2.length + 1
    const dp = new Array(len1).fill(0).map(v => new Array(len2).fill(0))
    for (let i = 0; i < len1; i ++) dp[i][0] = i
    for (let j = 0; j < len2; j ++) dp[0][j] = j
    for (let i = 1; i < len1; i ++){
        for (let j = 1; j < len2; j ++){
            if (word1[i - 1] === word2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1]
            }else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
            }
        }
    }
    return dp[len1 - 1][len2 - 1]
};
// console.log(minDistance("sea", "eat"));
// console.log(minDistance("leetcode", "etco"));
console.log(minDistance("a", "b"));