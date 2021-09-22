/**
 * @Author: dayTimeAffect
 * @Date: 2021/9/22
 */
/*
* https://leetcode-cn.com/problems/pascals-triangle/
* */
var generate = function(numRows) {
    if (numRows <= 1) return [[1]]
    let dp = [[1], [1, 1]]
    for (let i = 2; i < numRows; i ++){
        let tem = [1]
        for (let j = 1; j < i; j ++){
            tem[j] = dp[i - 1][j - 1] + dp[i - 1][j]
        }
        dp.push([...tem, 1])
    }
    return dp
};
console.log(generate(4));