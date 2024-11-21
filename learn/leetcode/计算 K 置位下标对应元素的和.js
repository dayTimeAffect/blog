/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/20
 */
/*
* https://leetcode.cn/problems/sum-of-values-at-indices-with-k-set-bits/?envType=daily-question&envId=2024-06-20
* */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let res = 0
    for (let i = 0; i < nums.length; i ++){
        let temI = i, flag = 0
        while (temI > 0){
            flag += temI & 1
            temI >>= 1
        }
        if (flag === k){
            res += nums[i]
        }
    }
    return res
};
console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1));