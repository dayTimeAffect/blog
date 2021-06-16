/**
 * @Author: dayTimeAffect
 * @Date: 2021/6/16
 */
/*
* https://leetcode-cn.com/problems/stone-game/
* */
var stoneGame = function(piles) {
    let dp = []
    //dp[i][j],表示piles中第i个数到第j个数组成序列的最佳拿取方式下的得分
    //dp[0][0] = 1 只有一堆石头，亚历克斯可以从0到0可以赢李1分
    //dp[0][4] = 1 有5堆石头，亚历克斯可以从0到4可以赢李1分
    for (let i = piles.length - 1; i >= 0; i --){
        dp[i] = []
        // j肯定大于等于i才是有意义的
        for (let j = i; j < piles.length; j ++){
            // 只有一堆石头，谁先手谁赢
            if (i === j) dp[i][j] = piles[i]
            // 只剩两堆石头，先手的拿多的，还是谁先手谁赢
            else if (j - i === 1) dp[i][j] = Math.abs(piles[i] - piles[j])
            // 大于两堆石头
            else {
                // 两种选择，但不论哪种，都是此时拿的石头减去下一位的最优选择
                // 当拿左边的石头时，下一位的最优选择为 dp[i + 1][j]
                // 当拿右边的石头时，下一位的最优选择为 dp[i][j - 1]
                dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
            }
        }
    }
    return dp[0][piles.length - 1] > 0
    // 可以看出（Math.max），每次先手玩家都可以选择两种选择中分数最高的那个，谁先手谁赢，直接return ture
};
console.log(stoneGame([5, 3, 4, 5]));