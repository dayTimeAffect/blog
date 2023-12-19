/**
 * @Author: dayTimeAffect
 * @Date: 2023/9/26
 */
/*
* https://leetcode.cn/problems/Q91FMA/
* */
var lenLongestFibSubseq = function(arr) {
    // i < j < k => arr[i] < arr[j] < arr[k]
    // dp[i][j]定义为以arr[i]和arr[j]作为斐波那契式子序列最后两个数的子序列长度
    const len = arr.length
    let dp = new Array(len).fill(0).map(v => new Array(len).fill(0)), max = 0
    for (let i = 0; i < len; i ++){
        for (let j = i + 1; j < len; j ++){
            for (let k = i + 2; k < len; k ++){
                if (arr[i] + arr[j] < arr[k]) break;
                if (arr[i] + arr[j] === arr[k]){
                    dp[j][k] = Math.max(dp[i][j] + 1, 3)
                    max = Math.max(max, dp[j][k])
                }
            }
        }
    }
    return max
};
var lenLongestFibSubseq = function(arr) {
    // i < j < k => arr[i] < arr[j] < arr[k]
    // dp[i][j]定义为以arr[i]和arr[j]作为斐波那契式子序列最后两个数的子序列长度
    const len = arr.length, indexMap = new Map()
    for (let i = 0; i < len; i ++){
        indexMap.set(arr[i], i)
    }
    let dp = new Array(len).fill(0).map(v => new Array(len).fill(0)), max = 0
    for (let i = 0; i < len; i ++){
        for (let k = i + 2; k < len; k ++){
            if (indexMap.has(arr[k] - arr[i]) && arr[k] - arr[i] !== arr[i]){
                dp[indexMap.get(arr[k] - arr[i])][k] = Math.max(dp[i][indexMap.get(arr[k] - arr[i])] + 1, 3)
                max = Math.max(max, dp[indexMap.get(arr[k] - arr[i])][k])
            }
        }
    }
    return max
};
// console.log(lenLongestFibSubseq([1,2,3,4,5,6,7,8]));
// console.log(lenLongestFibSubseq([1,3,7,11,12,14,18]));
console.log(lenLongestFibSubseq([2392,2545,2666,5043,5090,5869,6978,7293,7795]));