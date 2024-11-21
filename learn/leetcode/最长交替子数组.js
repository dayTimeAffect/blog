/**
 * @Author: dayTimeAffect
 * @Date: 2024/6/20
 */
/*
* https://leetcode.cn/problems/longest-alternating-subarray/?envType=daily-question&envId=2024-06-20
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
    let n = nums.length, res = -1
    for (let i = 1; i < n; i ++){
        if (nums[i] - nums[i - 1] === 1){
            let j = i, tem = 1
            while (j < n && nums[j] - nums[j - 1] === tem){
                tem = -tem
                j ++
            }
            res = Math.max(res, j - i + 1)
        }
    }
    return res
};
// console.log(alternatingSubarray([1,1,1,0,1,0,1,1,0,0]));
// console.log(alternatingSubarray([2,3,4,3,4]));
console.log(alternatingSubarray([21,9,5]));