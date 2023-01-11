/**
 * @Author: dayTimeAffect
 * @Date: 2023/1/5
 */
/*
* https://leetcode.cn/problems/count-pairs-with-xor-in-a-range/
* */
var countPairs = function(nums, low, high) {
    let res = 0
    for (let i = 0; i < nums.length; i ++){
        for (let j = i + 1; j < nums.length; j ++){
            if (nums[j] / nums[i] > 2) break;
            const cur = nums[i] ^ nums[j]
            if (cur >= low && cur <= high){
                res ++
            }
        }
    }
    return res
};
console.log(countPairs([1,4,2,7], 2, 6));