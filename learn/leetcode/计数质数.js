/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/13
 */
/*
* https://leetcode.cn/problems/count-primes/description/
* */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let ans = 0, isPrime = new Array(n).fill(true)
    for (let i = 2; i < n; i ++){
        if (isPrime[i]){
            ans ++
            for (let j = i * i; j < n; j += i){
                isPrime[j] = false
            }
        }
    }
    return ans
};