/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/9
 */
/*
* https://leetcode.cn/problems/guess-number-higher-or-lower-ii/
* */
var getMoneyAmount = function(n) {
    const map = new Array(n + 1).fill(-1).map(v => new Array(n + 1).fill(-1))
    const dfs = (start, end) => {
        if (start >= end) return 0
        if (map[start][end] > -1) return map[start][end]
        let ans = Infinity
        for (let i = start; i <= end; i ++){
            ans = Math.min(ans, Math.max(dfs(start, i - 1), dfs(i + 1, end)) + i)
        }
        map[start][end] = ans
        return ans
    }
    return dfs(1, n)
};
var getMoneyAmount = function(n) {
    const dp = new Array(n + 1).fill(0).map(v => new Array(n + 1).fill(0))
    for (let i = n - 1; i >= 1; i --){
        for (let j = i + 1; j <= n; j ++){
            dp[i][j] = Infinity
            for (let k = i; k < j; k ++){
                dp[i][j] = Math.min(dp[i][j], k + Math.max(dp[i][k - 1] , dp[k + 1][j]))
            }
        }
    }
    return dp[1][n]
};
console.log(getMoneyAmount(10));
