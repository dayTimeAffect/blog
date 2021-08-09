/**
 * @Author: dayTimeAffect
 * @Date: 2021/8/9
 */
/*
* https://leetcode-cn.com/problems/super-ugly-number/
* */
var nthSuperUglyNumber = function(n, primes) {
    // 动态规划
    let dp = new Array(n + 1).fill(0)
    dp[1] = 1
    const len = primes.length
    const pointers = new Array(len).fill(1)
    for (let i = 2; i <= n; i ++){
        let min = Infinity
        let tem = []
        for (let j = 0; j < len; j++){
            tem[j] = dp[pointers[j]] * primes[j]
            min = Math.min(min, tem[j])
        }
        dp[i] = min
        for (let j = 0; j <len; j ++){
            if (min === tem[j]) pointers[j] ++
        }
    }
    return dp[n]
};
console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));