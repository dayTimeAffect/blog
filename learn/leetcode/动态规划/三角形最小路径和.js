/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/6
 */
/*
* https://leetcode.cn/problems/triangle/
* */
var minimumTotal = function(triangle) {
    if (triangle.length === 1) return triangle[0][0]
    let dp = [[triangle[0][0]]], len = triangle.length
    for (let i = 1; i < len; i ++){
        dp[i] = new Array(i)
        for (let j = 0; j <= i; j ++){
            if (j === 0){
                dp[i][j] = dp[i - 1][j] + triangle[i][j]
            } else if (j === i){
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
            }else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
            }
        }
    }
    return Math.min(...dp[len - 1])
};
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));
console.log(minimumTotal([[-10]]));