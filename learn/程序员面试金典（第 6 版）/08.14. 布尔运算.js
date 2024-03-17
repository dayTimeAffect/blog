/**
 * @Author: dayTimeAffect
 * @Date: 2024/1/31
 */
/*
* https://leetcode.cn/problems/boolean-evaluation-lcci/description/
* */
/**
 * @param {string} s
 * @param {number} result
 * @return {number}
 */
var countEval = function(s, result) {
    // dp[i][j][result] 表示从i到j的字符串，结果为result的组合数 result为0或1
    let dp = new Array(s.length).fill(0).map(v => new Array(s.length).fill(0).map(v => new Array(2).fill(0)))
    for (let i = 0; i < s.length; i ++){
        if (s[i] === '0' || s[i] === '1'){
            dp[i][i][s[i]] = 1
        }
    }
    for (let i = s.length; i >= 0; i --){
        for (let j = i + 1; j < s.length; j ++){
            for (let k = i + 1; k < j; k ++){
                if (s[k] === '0' || s[k] === '1') continue;
                // 以k为分割点，分割为左右两部分
                let leftTrue = dp[i][k - 1][1], leftFalse = dp[i][k - 1][0]
                let rightTrue = dp[k + 1][j][1], rightFalse = dp[k + 1][j][0]
                if (s[k] === '&'){
                    dp[i][j][1] += leftTrue * rightTrue
                    dp[i][j][0] += leftTrue * rightFalse + leftFalse * rightTrue + leftFalse * rightFalse
                }
                if (s[k] === '|'){
                    dp[i][j][1] += leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue
                    dp[i][j][0] += leftFalse * rightFalse
                }
                if (s[k] === '^'){
                    dp[i][j][1] += leftTrue * rightFalse + leftFalse * rightTrue
                    dp[i][j][0] += leftTrue * rightTrue + leftFalse * rightFalse
                }
            }
        }
    }
    return dp[0][s.length - 1][result]
};
console.log(countEval("1^0|0|1", 0))
