/**
 * @Author: dayTimeAffect
 * @Date: 2022/3/8
 */
/*
* https://leetcode-cn.com/problems/plates-between-candles/
* */
var platesBetweenCandles = function(s, queries) {
    const res = [], preSum = [], arrL = [], arrR = []
    let sum = 0, leftIndex = -1, rightIndex = Infinity
    for (let l = 0, r = s.length - 1; l < s.length; l ++, r --){
        if (s[l] === '*') sum ++
        if (s[l] === '|') leftIndex = l
        if (s[r] === '|') rightIndex = r
        preSum[l] = sum
        arrL[l] = leftIndex
        arrR[r] = rightIndex
    }
    for (let i = 0; i < queries.length; i ++){
        const [start, end] = queries[i]
        res[i] = arrL[end] <= arrR[start] ? 0 : preSum[arrL[end]] - preSum[arrR[start]]
    }
    return res
};
// console.log(platesBetweenCandles("**|**|***|", [[2,5],[5,9]]));
// console.log(platesBetweenCandles("***|**|*****|**||**|*", [[1,17],[4,5],[14,17],[5,11],[15,16]]));
console.log(platesBetweenCandles("||*", [[2,2]]));