/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/20
 */
/*
* https://leetcode.cn/problems/cyJERH/
* */
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    // dp[i][0]和dp[i][1]，应该分别表示“翻转后第i项为0所需要的翻转次数”和“翻转后第i项为1所需要的翻转次数”。
    //将dp[i][0]最终置为 0，那么从 0 到 i-1 之间的所有位都必须是 0
    //将dp[i][1]最终置为 1，那么从 0 到 i-1 之间的位可以为 0 也可以为 1 (但是要求递增)
    let dp = []
    dp[0] = []
    dp[0][0] = s[0] === '0' ? 0 : 1
    dp[0][1] = s[0] === '1' ? 0 : 1
    for (let i = 1; i < s.length; i ++){
        dp[i] = []
        if (s[i] === '0'){
            //当前为0，那么将当前改为0不需要操作，将当前改为1，则上一步最小操作的基础上加一
            dp[i][0] = dp[i - 1][0]
            dp[i][1] = Math.min(...dp[i - 1]) + 1
        }else {
            //当前为1，那么将当前改为0需要在上一步的基础上加一，将当前改为1，则为上一步的最小操作
            dp[i][0] = dp[i - 1][0] + 1
            dp[i][1] = Math.min(...dp[i - 1])
        }
    }
    console.log(dp)
    return Math.min(...dp[s.length - 1])
};
// console.log(minFlipsMonoIncr("010110"));
// console.log(minFlipsMonoIncr("00011000"));
console.log(minFlipsMonoIncr("10011111110010111011"));