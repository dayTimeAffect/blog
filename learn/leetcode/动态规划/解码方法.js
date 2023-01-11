/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/4
 */
/*
* https://leetcode.cn/problems/decode-ways/
* */
var numDecodings = function(s) {
    if (s[0] === '0') return 0
    const map = {}
    for (let i = 1; i <= 26; i ++) {map[i] = true}
    const dp = [1, 1]
    for (let i = 2; i <= s.length; i ++){
        dp[i] = 0
        const cur = s[i - 1], pre = s[i - 2] + s[i - 1]
        if (map[cur] || map[pre]){
            if (map[cur]){
                dp[i] += dp[i - 1]
            }
            if (map[pre]){
                dp[i] += dp[i - 2]
            }
        }else {
            return 0
        }
    }
    return dp[s.length]
};
// console.log(numDecodings('12'));
// console.log(numDecodings('226'));
console.log(numDecodings('06'));