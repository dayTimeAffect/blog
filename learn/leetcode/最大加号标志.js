/**
 * @Author: dayTimeAffect
 * @Date: 2022/11/9
 */
/*
* https://leetcode.cn/problems/largest-plus-sign/
* */
var orderOfLargestPlusSign = function(n, mines) {
    //dp[i][j][k]标识(i, j)在方向k上连续1的数量，k为0_上,1_右,2_下,3_左
    const dp = [], map = []
    for (let i = 0; i < n; i ++){
        dp[i] = []
        map[i] = []
        for (let j = 0; j < n; j ++){
            dp[i][j] = [1, 1, 1, 1]
            map[i][j] = [1, 1, 1, 1]
        }
    }
    for (let [i, j] of mines){
        map[i][j] = 0
        dp[i][j] = [0, 0, 0, 0]
    }
    let res = 0
    for (let i = 0; i < n; i ++){
        for (let j = 0; j < n; j ++){
            if (map[i][j] !== 0) {
                if (j !== 0){
                    //往右
                    dp[i][j][1] = dp[i][j - 1][1] + 1
                }
                if (i !== 0){
                    //往下
                    dp[i][j][2] = dp[i - 1][j][2] + 1
                }
            }
            if (map[n - i - 1][n - j - 1] !== 0) {
                if (j !== 0){
                    //往左
                    dp[n - i - 1][n - j - 1][3] = dp[n - i - 1][n - j][3] + 1
                }
                if (i !== 0){
                    //往上
                    dp[n - i - 1][n - j - 1][0] = dp[n - i][n - j - 1][0] + 1
                }
            }
        }
    }
    for (let i = 0; i < n; i ++){
        for (let j = 0; j < n; j ++){
            res = Math.max(res, Math.min(...dp[i][j]))
        }
    }
    return res
};
var orderOfLargestPlusSign = function(n, mines) {
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(n)), map = new Set(mines.map(([i, j]) => `${i},${j}`))
    let res = 0, count = 0
    for (let i = 0; i < n; i ++){
        count = 0
        for (let j = 0; j < n; j ++){
            //向左
            if (map.has(`${i},${j}`)){
                count = 0
            }else {
                count ++
            }
            dp[i][j] = Math.min(dp[i][j], count);
        }
        count = 0
        for (let j = n - 1; j >= 0; j --){
            //向右
            if (map.has(`${i},${j}`)){
                count = 0
            }else {
                count ++
            }
            dp[i][j] = Math.min(dp[i][j], count);
        }
        count = 0
        for (let j = 0; j < n; j ++){
            //向下
            if (map.has(`${j},${i}`)){
                count = 0
            }else {
                count ++
            }
            dp[j][i] = Math.min(dp[j][i], count);
        }
        count = 0
        for (let j = n - 1; j >= 0; j --){
            //向上
            if (map.has(`${j},${i}`)){
                count = 0
            }else {
                count ++
            }
            dp[j][i] = Math.min(dp[j][i], count);
        }

    }
    for (let i = 0; i < n; i ++){
        res = Math.max(res, ...dp[i])
    }
    return res
};
console.log(orderOfLargestPlusSign(5, [[4, 2]]));
console.log(orderOfLargestPlusSign(2, [[0,0],[0,1],[1,0]]));
console.log(orderOfLargestPlusSign(5, [[1,0],[1,4],[2,4],[3,2],[4,0],[4,3]]));