/**
 * @Author: dayTimeAffect
 * @Date: 2023/7/5
 */
/*
* https://leetcode.cn/problems/k-items-with-the-maximum-sum/
* */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if (numOnes >= k){
        return k
    }
    if (numOnes + numZeros >= k){
        return numOnes
    }
    return numOnes - (k - (numOnes + numZeros))
};
console.log(kItemsWithMaximumSum(6, 6, 6, 13));