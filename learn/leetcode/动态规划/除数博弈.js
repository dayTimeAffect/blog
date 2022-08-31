/**
 * @Author: dayTimeAffect
 * @Date: 2022/7/25
 */
/*
* https://leetcode.cn/problems/divisor-game/
* */
var divisorGame = function(n) {
    let dp = [false, false, true]
    for (let i = 3; i <= n; i ++){
        let tem = 2
        dp[i] = !dp[i - 1]
        while (tem <= (i / 2)){
            if (i % tem === 0){
                dp[i] = (!dp[i - tem]) || dp[i]
            }
            tem ++
        }
    }
    return dp[n]
};
// console.log(divisorGame(3));
// console.log(divisorGame(4));
// console.log(divisorGame(5));
console.log(divisorGame(6));
// console.log(divisorGame(7));
// 1 -> false
// 2 -> true
// 3 -> false !dp[3 - 1]
// 4 -> true !dp[4 - 1] || !dp[4 - 2]
// 5 -> false !dp[5 - 1]
// 6 -> true !dp[6 - 1] || !dp[6 - 2] || !dp[6 - 3]
// 7 -> false
// 8 ->